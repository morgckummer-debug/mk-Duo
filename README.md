# MK-Duo

App web para acompanhamento de **gestação gemelar**, com idade gestacional compartilhada e acompanhamento individual de cada bebê.

## Funcionalidades

- **Idade gestacional e DPP**: cálculo pela DUM, pelo 1º ultrassom ou pela DPP, sempre atualizado ao abrir o app.
- **Corionicidade**: perfil da gestação com cards de corionicidade (Dicoriônica/Diamniótica, Monocoriônica/Diamniótica ou Monocoriônica/Monoamniótica), cada uma com o nível de vigilância recomendado.
- **Dois bebês**: nome, sexo e acompanhamento individual do Bebê A e do Bebê B — fêmur, peso estimado e discordância de crescimento entre eles.
- **Exames**: cronograma de exames adaptado à corionicidade, incluindo rastreio de Síndrome de Transfusão Feto-Fetal (STFF) para gestações monocoriônicas.
- **Monitoramento**: peso (com faixas de ganho adaptadas para gemelar), pressão arterial, curva glicêmica (TOTG, exame único entre 24-28 semanas), glicemia capilar diária (jejum/1h/2h pós-refeição, com destaque automático fora da meta), movimentos fetais e contrações.
- **Checklist** de pré-natal e período fértil.
- **Resumo pra consulta**: documento de uma página (com visual do app, tela e PDF) reunindo idade gestacional, base de cálculo (DUM ou data/IG do 1º ultrassom), corionicidade, gráfico de peso, pressão e glicemia dos últimos dias — pronto pra mostrar ou imprimir na consulta.
- **App instalável (PWA)**: manifest, service worker e prompt de instalação — funciona como um app nativo, com ícone na tela de início, sem precisar de loja de aplicativos.
- **Conta da usuária**: login com e-mail e senha, com sincronização em nuvem dos dados principais da gestação (corionicidade, nomes, sexo e data base) — não se perde ao trocar de aparelho.
- **Premium**: 7 dias de teste grátis com acesso completo; depois disso, desbloqueio único via checkout (Kiwify) para discordância de crescimento, cronograma de exames por corionicidade, monitoramento de peso/pressão/glicemia e o resumo pra consulta.
- **Tutorial de boas-vindas** revisitável e opção de iniciar uma nova gestação, apagando os dados salvos localmente.

## Tecnologia

Aplicação de página única (`index.html`), instalável como PWA (`manifest.webmanifest` + `sw.js`). Autenticação e sincronização da gestação via [Supabase](https://supabase.com); pagamentos via [Kiwify](https://kiwify.com.br). Dados de monitoramento do dia a dia (checklist, movimentos, contrações, peso, pressão, curva glicêmica, glicemia capilar) ficam salvos localmente no aparelho.

Derivado do [MKCalc](https://github.com/morgckummer-debug/appcalcmk).
