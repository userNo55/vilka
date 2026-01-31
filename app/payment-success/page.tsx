'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Можно добавить проверку статуса платежа через API
    setTimeout(() => {
      router.refresh(); // Обновить данные пользователя
    }, 2000);
  }, [router]);

  return (
    <div className="max-w-md mx-auto px-6 pt-20 pb-10 font-sans text-center">
      <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-8 rounded-3xl border border-green-200 dark:border-green-800 mb-6">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-2xl font-black mb-2">Оплата успешна!</h1>
        <p className="text-green-600 dark:text-green-300 mb-6">
          Ваш баланс пополнен. Монеты уже на вашем счету.
        </p>
      </div>
      
      <div className="space-y-4">
        <Link 
          href="/" 
          className="block w-full bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 transition"
        >
          На главную
        </Link>
        
        <Link 
          href="/buy" 
          className="block w-full border-2 border-slate-200 dark:border-gray-800 text-slate-700 dark:text-gray-300 py-3 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-gray-900 transition"
        >
          Купить ещё
        </Link>
      </div>
    </div>
  );
}