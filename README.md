# MK-Duo

App web para acompanhamento de **gestação gemelar**, com idade gestacional compartilhada e acompanhamento individual de cada bebê.

## Funcionalidades

- **Idade gestacional e DPP**: cálculo pela DUM, pelo 1º ultrassom ou pela DPP, sempre atualizado ao abrir o app.
- **Corionicidade**: perfil da gestação com cards de corionicidade (Dicoriônica/Diamniótica, Monocoriônica/Diamniótica ou Monocoriônica/Monoamniótica), cada uma com o nível de vigilância recomendado.
- **Dois bebês**: nome, sexo e acompanhamento individual do Bebê A e do Bebê B — fêmur, peso estimado e discordância de crescimento entre eles.
- **Exames**: cronograma de exames adaptado à corionicidade, incluindo rastreio de Síndrome de Transfusão Feto-Fetal (STFF) para gestações monocoriônicas.
- **Monitoramento**: peso (com faixas de ganho adaptadas para gemelar), pressão arterial, curva glicêmica (TOTG), movimentos fetais e contrações.
- **Checklist** de pré-natal e período fértil.
- **Conta da usuária**: login com e-mail e senha, com sincronização em nuvem dos dados principais da gestação (corionicidade, nomes, sexo e data base) — não se perde ao trocar de aparelho.
- **Premium**: 7 dias de teste grátis com acesso completo; depois disso, desbloqueio único via checkout (Kiwify) para discordância de crescimento, cronograma de exames por corionicidade e monitoramento de peso/pressão/curva glicêmica.
- **Tutorial de boas-vindas** revisitável e opção de iniciar uma nova gestação, apagando os dados salvos localmente.

## Tecnologia

Aplicação de página única (`index.html`). Autenticação e sincronização da gestação via [Supabase](https://supabase.com); pagamentos via [Kiwify](https://kiwify.com.br). Dados de monitoramento do dia a dia (checklist, movimentos, contrações, peso, pressão, curva glicêmica) ficam salvos localmente no aparelho.

Derivado do [MKCalc](https://github.com/morgckummer-debug/appcalcmk).
