// app/api/pay/route.ts - БЕЗ 'use client'
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { amount, userId, coins } = await request.json();

    if (!userId) {
      return NextResponse.json({ error: 'Необходима авторизация' }, { status: 401 });
    }

    if (!amount) {
      return NextResponse.json({ error: 'Укажите сумму оплаты' }, { status: 400 });
    }

    // Здесь интеграция с ЮKassa
    const yookassaResponse = await fetch('https://api.yookassa.ru/v3/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${process.env.YOOKASSA_SHOP_ID}:${process.env.YOOKASSA_SECRET_KEY}`).toString('base64')}`,
        'Idempotence-Key': `${Date.now()}-${userId}`,
      },
      body: JSON.stringify({
        amount: {
          value: amount.toString(),
          currency: 'RUB',
        },
        capture: true,
        confirmation: {
          type: 'redirect',
          return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success`,
        },
        description: `Пополнение баланса на ${coins} монет`,
        metadata: {
          userId,
          coins,
        },
      }),
    });

    const paymentData = await yookassaResponse.json();

    if (paymentData.confirmation && paymentData.confirmation.confirmation_url) {
      return NextResponse.json({ 
        confirmationUrl: paymentData.confirmation.confirmation_url,
        paymentId: paymentData.id 
      });
    } else {
      return NextResponse.json({ 
        error: paymentData.description || 'Ошибка создания платежа' 
      }, { status: 400 });
    }

  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}