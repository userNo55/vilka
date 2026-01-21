'use client';
import Link from 'next/link';

export default function AuthorTerms() {
  return (
    <main className="max-w-3xl mx-auto p-6 md:p-12 font-sans text-slate-900 leading-relaxed">
      <header className="mb-12 border-b border-slate-100 pb-6">
        <Link href="/" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition">
          ← Вернуться на главную
        </Link>
        <h1 className="text-4xl font-black tracking-tight mt-6 uppercase">Оферта для авторов</h1>
        <p className="text-slate-400 text-sm mt-2 font-medium">Редакция от 21 января 2026 года</p>
      </header>

      <article className="prose prose-slate max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">1. Статус платформы</h2>
          <p>
            StoryVoter (далее — Платформа) является инструментом для публикации интерактивной литературы. 
            Платформа предоставляет техническую инфраструктуру для взаимодействия Авторов и Читателей.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. Права и Лицензия</h2>
          <p>
            Вы сохраняете полное **исключительное право** на свои произведения. Публикуя текст, вы предоставляете 
            нам простую безвозмездную лицензию на отображение и хранение этого текста в рамках Платформы. 
            Вы можете удалить свою книгу в любой момент.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. Финансы и Баллы</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              На Платформе действует система внутренней поддержки (Баллы/Молнии). 
              Денежные средства, вносимые Читателями, являются **добровольными пожертвованиями** 
              на техническую поддержку и развитие проекта.
            </li>
            <li>
              <strong>На текущем этапе развития выплаты Авторам не производятся.</strong> 
              Размещая контент, вы подтверждаете, что делаете это на некоммерческой основе.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. Ответственность Автора</h2>
          <p>
            Вы гарантируете, что являетесь автором текста и не нарушаете чужих прав. 
            Вы обязуетесь самостоятельно устанавливать верный возрастной ценз (16+, 18+ и т.д.) 
            согласно законодательству РФ.
          </p>
        </section>

        <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <p className="text-sm font-medium text-slate-500 italic">
            Нажимая «Опубликовать» в редакторе, вы автоматически принимаете данные условия. 
            Если вы не согласны с офертой, пожалуйста, воздержитесь от публикации материалов.
          </p>
        </section>
      </article>

      <footer className="mt-16 pt-8 border-t border-slate-100 text-center">
        <Link href="/write" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm">
          Вернуться к написанию
        </Link>
      </footer>
    </main>
  );
}
