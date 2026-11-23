# BRIEFING + PLANO — Proposta de Tráfego Pago Premium (v2) · Box Marketing

> **Para a IA que vai construir a página:** este documento tem duas partes.
> **Parte A** é o plano específico desta proposta: o que muda, decisões, estrutura seção por seção, copy, dados reais, assets e etapas. Ela manda.
> **Parte B** é o catálogo técnico de efeitos e direção de arte (o briefing original). Use como referência de acabamento. Onde a Parte B conflitar com a Parte A, vale a Parte A.
> Onde houver `[PLACEHOLDER]` ou `[CONFIRMAR]`, deixe marcado para o Thiago preencher. **Nunca invente números de resultado.** Todos os números vêm dos relatórios exportados do Gerenciador de Anúncios da Meta (ver A.5).
> **Nunca escreva o nome de um cliente.** Cite só a área de atuação (ver Decisão 6).

*Revisão 2 (23/11/2026): sem nomes de clientes, sem FAQ, hero reescrito para passar autoridade, cases reorganizados em 4 pilares com os dados completos das 4 contas.*

---

# PARTE A — PLANO DA PROPOSTA

## A.0 O que muda em relação à proposta atual

Proposta atual: `proposta-trafego-pago.html` (maio/2026). Página escura simples, azul `#0066FF`, Inter, 5 blocos: escopo, investimento (R$ 750/mês), não incluso, quem sou, CTA. Sem prova, sem movimento, sem argumento de potencial.

| Item | Hoje | v2 |
|---|---|---|
| Visual | Cards estáticos, azul padrão | Dark Luxury Tech da referência do hero: blobs em movimento, grão, vidro, tipografia gigante serif itálico + sans, scroll suave, revelações |
| Preço | R$ 750/mês | **R$ 550/mês** |
| Prova | Nenhuma | **4 pilares de resultado** (faturamento, orçamento, seguidores, leads) com dados reais de 4 contas da Meta |
| Autoridade no topo | Nenhuma | **Painel consolidado** no hero: verba gerenciada, receita, conversas, seguidores, com fonte e período |
| Argumento | Lista de serviços | Seção **Potencial** com simulador interativo baseado nos resultados reais |
| Método | Não existe | 4 etapas em scroll pinado |
| Escopo, não incluso, quem sou, CNPJ | Existe | Mantido, com novo visual |
| FAQ | Não existe | **Continua sem FAQ** |

**Anti-referência** (`anexos/RESULTADO NÃO ESPERADO - RUIM - ENGESSADO - SEM GRAÇA.pdf`, proposta Dus Guri): fundo claro chapado, caixa-alta genérica pesada, layout 50/50 parado, nenhuma profundidade, nenhum movimento, preço "R$ 250,00" sem tratamento. **Tudo que estiver ali é o que não queremos.** Se uma seção puder ser confundida com um slide daquele PDF, ela está errada.

## A.1 Decisões de projeto

### Decisão 1 — Formato: página única estática, sem Next.js (recomendado)
O briefing original pedia Next.js. Para **esta proposta**, a recomendação é um único `index.html` com CSS e JS próprios, e as bibliotecas por CDN. Motivos:
- As outras propostas da Box são HTML único publicado em `vemprabox.com.br/<pasta>/`. A og:image atual já aponta para `vemprabox.com.br/trafego-pago/`. Mesmo fluxo de publicação, sem build e sem Vercel.
- A proposta é aberta pelo link no WhatsApp, quase sempre no celular. Página leve carrega mais rápido que um app React.
- **Nada do efeito se perde.** GSAP (com ScrollTrigger, SplitText, DrawSVG e ScrambleText, todos gratuitos) e Lenis funcionam por CDN. O fundo da referência já é CSS puro. Os componentes do React Bits/Aceternity viram efeitos equivalentes escritos à mão (spotlight, border beam, marquee, count-up, tilt).
- O plano em Next.js da Parte B continua valendo para o **site institucional de tráfego** no futuro.

Bibliotecas (fixar versões):
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/DrawSVGPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/ScrambleTextPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
```
Fontes: Geist, Geist Mono e Instrument Serif (itálico) pelo Google Fonts, `display=swap`.

### Decisão 2 — Paleta: a da referência, com o logo original (recomendado)
O logo da Box é um cubo em degradê coral/rosa com texto branco. A referência usa violeta + ciano + champanhe.
- **Opção A (recomendada):** manter exatamente a paleta da referência (`#07070A`, violeta `#7C5CFF`, ciano `#22D3EE`, champanhe `#E8D3A2`). O logo entra pequeno na navbar e no rodapé; o coral do cubo vira um toque de cor que conversa com o violeta.
- **Opção B:** trocar o violeta pelo coral da marca (`#FF4D7A` aprox., amostrar do `logo.png`) e manter ciano + champanhe. Mais "Box", menos parecido com a referência.

### Decisão 3 — Preço só na seção Investimento
Regra da casa: valores da gestão aparecem **apenas** na seção Investimento. O simulador do Potencial fala só de **verba de mídia**, nunca da mensalidade. Blocos de escopo e método não mostram preço.

### Decisão 4 — PDF continua possível
As propostas também são enviadas em PDF. A página precisa de um `@media print`: todas as animações desligadas, tudo visível no estado final, fundo escuro mantido (`print-color-adjust: exact`), quebra de página entre seções, simulador impresso com um valor padrão (ex.: R$ 1.000), os 4 pilares de resultado empilhados.

### Decisão 5 — Arquivo de saída
- Criar `proposta-trafego-pago-v2.html` nesta pasta (a v1 fica como histórico).
- Imagens em `trafego-pago-assets/` (copiar e comprimir; não apontar para a pasta do portfólio).
- Na publicação, sobe como `vemprabox.com.br/trafego-pago/index.html`.

### Decisão 6 — Clientes anônimos, só a área de atuação
Nenhum nome de cliente aparece na página: nem no texto, nem em nome de campanha, nem em imagem.
- Cada conta vira a sua área: **Saúde · diagnóstico por imagem**, **Odontologia estética**, **Advocacia trabalhista e previdenciária**, **Infoprodutos · educação para fotógrafos**.
- Nome de campanha só entra pelo **tema** (ex.: "campanha de ecocardiograma", "conteúdo sobre FGTS"), nunca pelo nome do produto, da marca ou de pessoas. Nos relatórios há campanhas com nome de produto e nomes de pessoas: reescrever sempre.
- Imagens: nada com logo, fachada, uniforme ou rosto identificável de cliente. Os gráficos e painéis feitos em código substituem criativos de cliente.

## A.2 Direção de arte (resumo aplicado)

Seguir a referência `Prévia do Hero — Site de Tráfego Pago – Hero — Dark Luxury Tech.html` como **padrão visual de todas as seções**, não só do hero:
- Fundo `#07070A`; três blobs desfocados (violeta, ciano, champanhe) em `drift` de 22–30s; grid de 72px com máscara radial; grão SVG `opacity .07`; spotlight radial que segue o mouse; degradê para o preto na base de cada seção.
- Navbar em pílula de vidro (`backdrop-filter: blur(18px)`, borda `rgba(255,255,255,.09)`).
- Título: Geist 500, `letter-spacing: -0.045em`, `line-height: .98`; palavra-chave em **Instrument Serif itálico** com degradê (champanhe → branco, ou ciano/violeta).
- Números sempre em **Geist Mono**, cor champanhe `#E8D3A2`, `tabular-nums`.
- Cards: borda 1px `rgba(255,255,255,.08)`, fundo `rgba(255,255,255,.02)`, raio 18–26px, hover com borda champanhe.
- Botão primário: degradê violeta, brilho deslizando no hover, sombra violeta. Secundário: ghost com borda.
- Easing único `cubic-bezier(.16,1,.3,1)`. Entradas 0,9–1,2s. Microinterações 150–300ms.
- **Cada seção ganha uma variação de fundo** para a página não ficar monótona: hero (blobs), potencial (grid + linhas de dados), resultados (fundo mais escuro, luz lateral que muda de cor a cada pilar), investimento (feixe de luz central atrás do card), CTA final (aurora intensa).
- **Regra dos números:** nenhum número aparece sozinho. Todo número tem (1) o que ele é, (2) a área ou o contexto e (3) a fonte. Número solto em card não passa autoridade; número dentro de um painel com fonte e período passa.

## A.3 Estrutura seção por seção

Navegação: `Resultados · Potencial · Escopo · Investimento` + botão "Falar no WhatsApp".

Ordem: Hero → Manifesto → **Resultados (4 pilares)** → Potencial → Escopo → Método → Investimento → Quem está por trás → CTA final. A prova vem antes do simulador: primeiro o cliente vê o que já foi feito, depois projeta para o negócio dele.

### 0 · Preloader (opcional, ≤ 1s)
Contador mono 0→100, logo aparece, cortina sobe. Só na primeira visita (`sessionStorage`). Desligado com `prefers-reduced-motion` e na impressão.

### 1 · Hero
Base: a referência. **Mudança principal: saem os 3 cards de métrica soltos.** A autoridade passa a vir de um painel que parece um relatório auditado, com fonte, período e quebra por área.

**Coluna da esquerda**
- Badge com ponto pulsando + texto com brilho: **"Proposta personalizada · Gestão de Tráfego Pago"**. Opcional: "para [NOME DO CLIENTE]".
- H1 em duas linhas com revelação por máscara: **"Anúncios que viram** *[faturamento. | clientes. | agenda cheia. | escala.]***"** (palavra rotativa em serif itálico).
- Subtítulo: "Estratégia, criativos e dados trabalhando juntos para que cada real investido em anúncio volte como cliente no seu WhatsApp."
- CTAs: **"Ver resultados reais"** (rola até Resultados) e **"Falar no WhatsApp"** (ghost).
- **Linha de credencial** (substitui os cards), uma frase só, com os números em mono champanhe:
  > "Mais de **R$ 116 mil** em anúncios gerenciados em **saúde, odontologia, advocacia e infoprodutos**."
  Abaixo, quatro chips pequenos com ícone de cada área (estetoscópio, dente, balança, câmera), que acendem em sequência.

**Coluna da direita: Painel consolidado** (vidro inclinado em 3D, flutuando, como na referência)
- Cabeçalho: "Painel consolidado · 4 contas de anúncio" + selo pequeno "Meta Ads · out/2023 – nov/2026".
- Linha de destaque (count-up ao carregar):
  - **R$ 116.330** · verba gerenciada
  - **R$ 119.082** · em vendas atribuídas
- Gráfico: barras horizontais da verba por área, crescendo uma a uma:
  - Infoprodutos R$ 75,2 mil (64,6%)
  - Saúde R$ 20,9 mil (17,9%)
  - Odontologia R$ 15,3 mil (13,2%)
  - Advocacia R$ 5,0 mil (4,3%)
- Rodapé com 3 mini-KPIs: **3.239** conversas no WhatsApp · **21.190** seguidores · **14,6 mi** impressões.
- Linha de fonte: "Fonte: relatórios do Gerenciador de Anúncios da Meta, soma de 4 contas."

No mobile, o painel desce para baixo dos CTAs (não some, como acontecia na referência), em versão compacta: as duas cifras de destaque + as barras.

**Faixa de plataformas** em marquee: Meta Ads · Instagram · Facebook · WhatsApp · Google Ads · YouTube · Google Analytics 4 · Tag Manager. `[CONFIRMAR: TikTok Ads entra no escopo?]` Se não, não listar. Indicador de scroll.

### 2 · Manifesto (o problema)
Parágrafo gigante em que as palavras acendem com o scroll (SplitText por palavra + ScrollTrigger scrub, de `#3A3A44` para `#F5F5F7`). Texto adaptado do Método Box:
> "Ter um perfil bonito e não anunciar é como ter um escritório lindo numa rua onde ninguém passa. **Conteúdo é a base.** Mas é o anúncio certo, para a pessoa certa, na hora certa, que coloca *gente na sua rua* e cliente no seu WhatsApp."

### 3 · Resultados: 4 pilares (a seção mais importante)
Título: "Quatro coisas que o tráfego *bem feito* entrega." Sub: "Dados exportados do Gerenciador de Anúncios da Meta. Clientes reais, identificados só pela área de atuação."

**Layout desktop:** seção pinada. À esquerda, um índice fixo com os 4 pilares (`01 Faturamento · 02 Orçamento · 03 Seguidores · 04 Leads`), com barra de progresso vertical e o pilar ativo aceso. À direita, o conteúdo de cada pilar entra e sai com o scroll. A luz lateral do fundo muda de cor a cada pilar (champanhe → violeta → ciano → verde WhatsApp suave). **Mobile:** os 4 pilares empilhados, cada um com o seu número gigante e um gráfico.

Cada pilar segue a mesma anatomia:
1. Rótulo da área (chip) + nome do pilar.
2. **Número herói** gigante em mono, com count-up.
3. Uma frase que dá contexto ao número.
4. 3 KPIs de apoio.
5. Uma visualização animada.
6. 1 ou 2 "destaques" de campanha (sempre pelo tema, nunca pelo nome).
7. Nota de rodapé curta.

---

**01 · Faturamento** · chip "Infoprodutos · educação para fotógrafos"
- Herói: **R$ 119.082** em vendas atribuídas.
- Frase: "Venda online de produto digital, do primeiro anúncio ao checkout."
- KPIs: **2.441** vendas · **R$ 62.145** investidos em campanhas de venda · **ROAS 1,92x** nessas campanhas.
- Visualização: **funil real que se desenha no scroll**, com os números de cada etapa contando:
  `6,6 mi impressões → 49.059 visitas à página de vendas → 21.664 checkouts iniciados → 2.441 vendas → R$ 119 mil`
- Destaques:
  - "Campanha do produto principal: **R$ 3.112 viraram R$ 10.313** (ROAS 3,31x, 123 vendas)."
  - "Criativo com tema de ensaio de gestante: **R$ 870 viraram R$ 3.024** (ROAS 3,48x)."
  - "14 das 25 campanhas com 20 ou mais vendas passaram de ROAS 2x."
- Nota: "Receita atribuída pela Meta. ROAS não é lucro. Sobre toda a verba da conta, incluindo testes e campanhas de público, o ROAS foi de 1,58x."

**02 · Orçamento** · chip "4 contas · 4 áreas"
- Herói: **R$ 116.330** em verba gerenciada.
- Frase: "Do teste de R$ 50 à conta de R$ 75 mil. Cada real com um objetivo definido."
- KPIs: **528** campanhas com investimento · **14,6 milhões** de impressões · maior conta: **R$ 75 mil**.
- Visualização: duas barras empilhadas animadas, lado a lado:
  - **Por área:** Infoprodutos 64,6% · Saúde 17,9% · Odontologia 13,2% · Advocacia 4,3%.
  - **Por objetivo:** Vendas R$ 62,1 mil · Seguidores R$ 23,4 mil · Conversas no WhatsApp R$ 22,5 mil · Alcance, engajamento e testes R$ 8,3 mil.
  - Ao passar o mouse (ou tocar), cada fatia mostra o valor em reais.
- Destaque: "Verba dividida entre vender, gerar conversas e construir público, conforme o momento de cada negócio."
- Nota: "Soma dos relatórios de out/2023 a nov/2026. O período do relatório não indica a duração de cada campanha."

**03 · Seguidores** · chip "Construção de público"
- Herói: **21.190** seguidores conquistados com anúncios.
- Frase: "Público novo, segmentado, que passa a ver o seu conteúdo todo dia."
- KPIs: **102 mil** visitas ao perfil · **R$ 1,49** por seguidor nas campanhas de seguidores · **12.376** seguidores em infoprodutos a **R$ 0,60** cada.
- Visualização: contador grande "subindo" + barras de custo por seguidor por área (Infoprodutos R$ 0,60 · Advocacia R$ 3,41 · Saúde R$ 4,49 · Odontologia R$ 5,67), com a frase "o custo muda conforme o nicho, e a estratégia também."
- Destaques:
  - "Um único vídeo educativo trouxe **1.184 seguidores com R$ 328** (R$ 0,28 cada)." (infoprodutos)
  - "Na advocacia, **741 seguidores com R$ 1.281** numa campanha com criativos específicos por tema."
- Nota: "Seguidores atribuídos pela Meta aos anúncios."

**04 · Leads** · chip "Saúde · Odontologia · Advocacia"
- Herói: **3.239** conversas iniciadas no WhatsApp.
- Frase: "Gente real chamando no WhatsApp, perguntando preço, horário e como agendar."
- KPIs: **R$ 6,94** custo médio por conversa · Saúde **2.533** conversas (R$ 6,26 cada) · Odontologia **511** · Advocacia **195**.
- Visualização: mockup de celular com notificações de WhatsApp entrando em sequência (mensagens genéricas, sem nomes; marcar "ilustração") ao lado de um contador de conversas. Abaixo, barras de custo por conversa por área com linha da média.
- Destaques:
  - Saúde: "Campanha de ultrassom 4D: **62 conversas a R$ 2,19 cada**." e "Uma única campanha de ecocardiograma gerou **256 conversas**."
  - Advocacia: "Conteúdo sobre saque do FGTS: **71 conversas a R$ 2,74 cada**."
  - Odontologia: "Campanha de facetas de resina: **31 conversas a R$ 4,70 cada**."
- Nota: "Conversa iniciada não é agendamento nem contrato fechado. O fechamento depende do atendimento."

---

Reforço opcional, muito recomendado: carrossel de **prints reais do Gerenciador** com nome de conta, campanhas e qualquer identificação borrados. `[PLACEHOLDER: Thiago envia 2–4 prints]`.

### 4 · Potencial (simulador)
Objetivo: depois de ver o que já foi feito, o cliente **projeta para o negócio dele**.

**4a. Título:** "Agora, imagine isso *no seu negócio.*" + "Mova a verba e veja uma estimativa feita com os custos reais acima."

**4b. Simulador interativo.** Card grande de vidro com:
- Alternador de objetivo: **[ Conversas no WhatsApp ]** / **[ Seguidores ]** / **[ Vendas online ]**.
- Slider de **verba mensal de anúncios**: R$ 300 a R$ 5.000, passo R$ 100, padrão R$ 1.000.
- Resultado em números mono gigantes que recalculam com count-up suave:
  - **Conversas:** de `verba ÷ 9,52` (conservador, área com custo mais alto) a `verba ÷ 6,26` (saúde). R$ 1.000 → **105 a 160 conversas/mês**, "cerca de 3 a 5 por dia".
  - **Seguidores:** de `verba ÷ 3,41` a `verba ÷ 1,49` (média das campanhas de seguidores). R$ 1.000 → **293 a 671 seguidores/mês**.
  - **Vendas:** vendas = `verba ÷ 25,46` (custo médio por venda); receita atribuída = `verba × 1,92` (ROAS médio das campanhas de venda). R$ 1.000 → **≈ 39 vendas e R$ 1.920 em receita atribuída**.
- Mini-gráfico de barras ao lado que cresce com o slider.
- Aviso fixo, legível: "Estimativa calculada com os custos médios das campanhas mostradas em Resultados. Os números variam conforme nicho, oferta, ticket, região, criativos e atendimento. Não é promessa de resultado."
- **Não mostrar a mensalidade aqui** (Decisão 3).

**4c. O caminho do cliente.** Funil horizontal que se desenha no scroll (DrawSVG): **Alcance → Clique → Conversa → Cliente**, cada etapa com ícone animado e uma frase do que a gestão faz nela (segmentação, criativo, oferta, acompanhamento). Sem números.

### 5 · Escopo — "O que está incluso"
Os 7 itens da proposta atual, em **bento grid** (tamanhos diferentes), cada card com spotlight seguindo o mouse, borda com brilho percorrendo no hover e ícone que anima quando o card inteiro recebe hover:
1. **Configuração inicial** (card grande): BM, conta de anúncios, acessos, pixel, eventos. Dentro, um mini-checklist que se marca sozinho ao entrar na tela.
2. **Estratégia de campanhas:** objetivos, públicos, verba, formatos.
3. **Criação e gerenciamento:** campanhas acompanhadas e otimizadas continuamente.
4. **Análise de resultados:** o que funciona, o que ajustar, onde estão as oportunidades.
5. **Relatórios mensais:** resultados, investimento, custos, aprendizados e próximos passos.
6. **Curadoria de criativos:** orientação sobre imagens, vídeos, chamadas e formatos.
7. **Reunião semanal online** (card largo): até 1 por semana.

Sem preço nesta seção.

### 6 · Método — como funciona
4 etapas em seção pinada: número gigante da etapa trocando, linha de progresso se desenhando, texto entrando.
1. **Diagnóstico e configuração**: entender o negócio, organizar contas, pixel e eventos.
2. **Estratégia e lançamento**: públicos, ofertas, criativos e campanhas no ar.
3. **Otimização contínua**: leitura de dados, ajustes, testes de criativo e público.
4. **Relatório e escala**: o que funcionou ganha mais verba; próximos passos.
`[CONFIRMAR prazos: ex. campanhas no ar em até X dias úteis após acessos liberados]`

### 7 · Investimento
O momento de maior "luxo" da página.
- Feixe de luz vertical atrás de um card de vidro grande com borda em brilho percorrendo (border beam).
- Rótulo: "Gestão mensal de tráfego pago".
- **R$ 550**`/mês` em Geist Mono gigante champanhe, revelado com ScrambleText (os dígitos "decodificam" ao entrar na tela).
- Linha fina abaixo: "Menos de R$ 19 por dia." (550 ÷ 30 = 18,33)
- Lista com checks animados: planejamento, configuração, gerenciamento, análise, relatórios, curadoria de criativos, reuniões semanais.
- CTA primário: **"Quero começar"** → WhatsApp com mensagem pronta.
- Card irmão menor, discreto (borda champanhe suave), **"Não está incluso"**:
  - Verba de anúncios: paga pelo cliente direto à plataforma.
  - Artes, vídeos, landing pages e materiais extras: orçados à parte.
- `[CONFIRMAR]` forma de pagamento, fidelidade (ou "sem fidelidade"), validade da proposta, verba mínima recomendada para começar.
- `[DECIDIR]` mostrar o preço antigo riscado ("de R$ 750 por R$ 550")? Recomendação: **não**, para não parecer promoção de varejo. Usar só se for condição especial com prazo.

### 8 · Quem está por trás
Card dividido: foto (`foto-thiago.jpg`) com leve parallax + bio atual (Rio Grande, publicitário pela UCPel, desde 2022, advocacia, saúde e educação) + tags. Abaixo, faixa de **bastidores** em marquee lento, **só com fotos sem logo, fachada ou rosto identificável de cliente** (Decisão 6). `[CONFIRMAR quais fotos podem entrar]`.

### 9 · CTA final + rodapé
- Seção em tela cheia, aurora mais intensa: **"Vamos colocar *gente na sua rua?*"**
- Botões: "Aprovar proposta no WhatsApp" (primário) e "Tirar uma dúvida" (ghost).
- Rodapé: wordmark **BOX MARKETING** gigante ocupando a largura, em contorno sutil; linha: LUIZA SANTOS OSORIO LTDA · CNPJ 53.091.213/0001-32 · e-mail · validade da proposta.
- Botão flutuante de WhatsApp aparece após 30% de scroll.
- `[PLACEHOLDER: número de WhatsApp e mensagem padrão]`.

**Sem FAQ.** Dúvidas vão para o WhatsApp.

## A.4 Copy — tom
Direto, confiante, sem jargão vazio ("alavancar", "potencializar", "resultados exponenciais"). Frases curtas. Termos técnicos (ROAS, pixel, BM) só onde o cliente precisa, e com explicação curta na primeira vez (ex.: "ROAS: quanto voltou em vendas para cada real investido"). Português com acentuação correta.

## A.5 Dados (fonte única da verdade)

Fonte: 4 relatórios de campanhas exportados do Gerenciador de Anúncios da Meta (`C:\Users\T-GAMER\Downloads\Métricas\*.csv`), janela de 23/10/2023 a 23/11/2026. Totais calculados somando as linhas de cada arquivo. Os nomes dos arquivos e das campanhas têm nome de cliente: **não copiar para a página**.

### A.5.1 Por conta (identificada só pela área)

| Área | Verba | Impressões | Campanhas com verba | Conversas WhatsApp | Seguidores | Vendas | Receita atribuída |
|---|---|---|---|---|---|---|---|
| Infoprodutos · educação para fotógrafos | R$ 75.174,45 | 6.599.067 | 293 | — | 17.225 | 2.441 | R$ 119.082,15 |
| Saúde · diagnóstico por imagem | R$ 20.852,06 | 4.018.794 | 87 | 2.533 | 1.203 | — | — |
| Odontologia estética | R$ 15.311,73 | 2.975.672 | 127 | 511 | 1.898 | — | — |
| Advocacia trabalhista e previdenciária | R$ 4.992,05 | 1.034.270 | 21 | 195 | 864 | — | — |
| **Total** | **R$ 116.330,29** | **14.627.803** | **528** | **3.239** | **21.190** | **2.441** | **R$ 119.082,15** |

### A.5.2 Por objetivo

| Objetivo | Verba | Resultado | Custo por resultado |
|---|---|---|---|
| Vendas (infoprodutos) | R$ 62.144,56 | 2.441 vendas · R$ 119.082,15 | R$ 25,46 por venda · ROAS 1,92x |
| Conversas no WhatsApp (3 contas) | R$ 22.490,02 | 3.239 conversas | R$ 6,94 |
| Seguidores / visitas ao perfil (4 contas) | R$ 23.443,54 | 15.703 seguidores · 101.999 visitas ao perfil | R$ 1,49 por seguidor · R$ 0,23 por visita |
| Alcance, engajamento, testes e outros | R$ 8.252,17 | — | — |

Funil de vendas (infoprodutos): 6.599.067 impressões → 49.059 visitas à página de destino → 21.664 checkouts iniciados → 2.441 vendas → R$ 119.082,15. ROAS sobre a verba total da conta: 1,58x.

Custo por conversa: Saúde R$ 6,26 · Advocacia R$ 9,04 · Odontologia R$ 9,52.
Custo por seguidor (campanhas de seguidores): Infoprodutos R$ 0,60 · Advocacia R$ 3,41 · Saúde R$ 4,49 · Odontologia R$ 5,67.

### A.5.3 Destaques de campanha (como devem ser escritos na página)

| Área | Como escrever | Números |
|---|---|---|
| Infoprodutos | Campanha do produto principal | R$ 3.112,45 → R$ 10.313,46 · 123 vendas · ROAS 3,31x |
| Infoprodutos | Criativo com tema de ensaio de gestante | R$ 869,58 → R$ 3.024,00 · 35 vendas · ROAS 3,48x |
| Infoprodutos | Campanha de manutenção de e-book | R$ 2.314,88 → R$ 6.021,96 · 214 vendas · R$ 10,82 por venda |
| Infoprodutos | Vídeo educativo para ganhar seguidores | 1.184 seguidores · R$ 328,45 · R$ 0,28 cada |
| Infoprodutos | Consistência | 14 de 25 campanhas com 20+ vendas acima de ROAS 2x |
| Saúde | Campanha de ultrassom 4D | 62 conversas · R$ 135,90 · R$ 2,19 cada |
| Saúde | Campanha de ecocardiograma | 256 conversas · R$ 1.414,25 · R$ 5,52 cada |
| Advocacia | Conteúdo sobre saque do FGTS | 71 conversas · R$ 194,69 · R$ 2,74 cada |
| Advocacia | Criativos específicos por tema (seguidores) | 741 seguidores · R$ 1.281,49 · R$ 1,73 cada |
| Odontologia | Campanha de facetas de resina | 31 conversas · R$ 145,59 · R$ 4,70 cada |

### A.5.4 Constantes do simulador
| Modo | Fórmula | De onde vem |
|---|---|---|
| Conversas | `verba ÷ 9,52` a `verba ÷ 6,26` | custo por conversa da odontologia (mais alto) e da saúde |
| Seguidores | `verba ÷ 3,41` a `verba ÷ 1,49` | custo por seguidor da advocacia e média das campanhas de seguidores |
| Vendas | `verba ÷ 25,46` vendas; `verba × 1,92` receita | médias das campanhas de venda |

### A.5.5 Regras de uso
- Nunca somar conversas, seguidores e vendas num "resultado" único.
- Sempre "receita atribuída" ou "vendas atribuídas", nunca "lucro" ou "faturamento líquido".
- Alcance não é somado (as contas se sobrepõem); usar impressões.
- Manter as notas de rodapé de cada pilar.

## A.6 Assets

| Asset | Origem | Uso |
|---|---|---|
| Logo | `Proposta FAURG/logo.png` | Navbar, preloader, rodapé |
| Foto do Thiago | `Proposta FAURG/foto-thiago.jpg` | Quem está por trás |
| Bastidores | `Portfolio Social Media/apresentacao/assets/bastidores/` e as fotos `WhatsApp Image 2026-11-10...jpeg` | Faixa de bastidores, **só as que não mostram logo nem rosto de cliente**. A foto `WhatsApp Image 2026-11-10 at 16.28.22.jpeg` mostra o logo de um escritório: **não usar**. |
| Prints do Gerenciador (borrados) | `[PLACEHOLDER]` | Prova extra nos Resultados |
| Gráficos, painel, funil, mockup de WhatsApp | Feitos em código (SVG/CSS) | Hero e Resultados |
| Nova og:image 1200×630 | Criar no visual novo | Prévia do link no WhatsApp |

Criativos de clientes (posts e vídeos do portfólio) **não entram**: mostram marca e rosto. Todas as imagens: copiar para `trafego-pago-assets/`, converter para WebP, largura máxima 1200px, `loading="lazy"` fora do hero.

## A.7 Requisitos técnicos desta versão
- **Mobile primeiro**: a maioria abre pelo WhatsApp. No mobile: blobs com menos blur e menos camadas, sem spotlight de mouse, sem cursor custom, pilares de resultado empilhados (sem pin), seção do método sem pin (etapas empilhadas com revelação simples), painel do hero em versão compacta abaixo dos CTAs.
- Lenis + ScrollTrigger sincronizados (exemplo na Parte B, 3.5).
- Animar só `transform`, `opacity` e `filter`.
- `prefers-reduced-motion`: sem Lenis, sem drift dos blobs, sem palavra rotativa (mostra "faturamento."), números já no valor final, conteúdo visível de imediato.
- Sem JS: todo o conteúdo precisa estar visível (estado inicial das animações aplicado via classe `.js` no `<html>`), com os números finais escritos no HTML.
- Simulador acessível: `<input type="range">` nativo estilizado, valores em `aria-live="polite"`.
- Gráficos com `role="img"` e `aria-label` descrevendo os números.
- `@media print` (Decisão 4).
- Meta tags e Open Graph atualizados (título, descrição sem preço, nova imagem).
- Evento de clique no WhatsApp pronto para pixel `[OPCIONAL]`.
- Objeto `CONTENT` no topo do `<script>` com WhatsApp, todos os números da A.5 e as constantes do simulador.
- Meta: carregamento no 4G abaixo de 2,5s até o hero aparecer; sem layout shift.

## A.8 Etapas de execução (mostrar e aprovar cada uma)
1. **Base + Hero**: tokens, fontes, fundo, navbar, hero com painel consolidado, marquee. → aprovação do visual
2. **Manifesto + Resultados**: texto que acende e os 4 pilares com gráficos. → aprovação
3. **Potencial**: simulador e funil. → aprovação
4. **Escopo + Método**: bento grid e etapas pinadas.
5. **Investimento + Quem + CTA + rodapé**.
6. **QA**: celular real (Android e iPhone), reduced-motion, impressão em PDF A4, ortografia, links do WhatsApp, **busca por qualquer nome de cliente no HTML final** (não pode haver nenhum).
7. **Publicação**: og:image nova, subir em `vemprabox.com.br/trafego-pago/`, testar a prévia do link no WhatsApp.

## A.9 Pendências para o Thiago
1. Prints do Gerenciador para borrar (opcional, reforça muito).
2. Quais fotos de bastidores podem entrar.
3. TikTok Ads entra no escopo?
4. Número do WhatsApp e mensagem padrão.
5. Condições: pagamento, fidelidade, validade da proposta, verba mínima recomendada.
6. Prazo para campanhas no ar após a liberação dos acessos.
7. Paleta: Opção A (referência) ou B (coral da marca).
8. Proposta genérica ou personalizada com o nome do cliente no hero?

---

# PARTE B — CATÁLOGO TÉCNICO E DIREÇÃO DE ARTE (briefing original)

> Referência de acabamento. Os nomes de componentes React (React Bits, Aceternity, Magic UI) indicam **o efeito** desejado; nesta proposta eles são recriados em HTML/CSS/JS puro (Decisão 1). A stack Next.js abaixo vale para o futuro site institucional.

## 0. O objetivo em uma frase

Um site de apresentação de serviço de tráfego pago (Meta Ads, Google Ads, TikTok Ads) que, nos primeiros 3 segundos, cause a reação **"isso aqui é outro nível"** — nível de site premiado (Awwwards / FWA / Linear / Vercel / Stripe / Apple) — e que converta o visitante em contato via WhatsApp ou formulário.

**Sensação desejada:** luxo silencioso + tecnologia + precisão. Movimento constante, mas suave e intencional. Nada de "efeito por efeito": cada animação existe para guiar o olhar ou reforçar uma mensagem (crescimento, controle, dados, escala).

---

## 1. Stack (para o site institucional; para esta proposta, ver Decisão 1)

| Camada | Tecnologia | Por quê |
|---|---|---|
| Framework | **Next.js (App Router) + React + TypeScript** | Padrão de mercado, SEO, performance, deploy fácil (Vercel) |
| Estilo | **Tailwind CSS v4** | Base para os componentes copy-paste (React Bits, Aceternity, Magic UI) |
| Animação de UI | **Motion** (antigo Framer Motion) — `npm i motion`, importar de `motion/react` | Microinterações, hover, entradas, layout animations |
| Animação de scroll e texto | **GSAP + ScrollTrigger + SplitText** — `npm i gsap @gsap/react` | Timelines de scroll, pin de seções, texto letra a letra. **Todos os plugins do GSAP são gratuitos hoje, inclusive para uso comercial** (SplitText, MorphSVG, DrawSVG, ScrambleText, Flip etc.) — vêm todos no pacote `gsap` do npm, sem token. |
| Scroll suave | **Lenis** — `npm i lenis` | O "scroll amanteigado" dos sites premiados, sincronizado com GSAP |
| Fundos em shader (WebGL) | **React Bits** (backgrounds) + **Paper Shaders** (`@paper-design/shaders-react`) | Degradês vivos que se movem no fundo |
| 3D (opcional, para o "uau" extra) | **Three.js + React Three Fiber + Drei** | Objeto 3D no hero ou dashboard flutuante |
| Ícones animados | **lucide-animated** (lucide-animated.com) ou **Its Hover** (itshover.com) ou `@animateicons/react` | Ícones que se animam no hover |
| Componentes | **shadcn/ui** como base + **React Bits**, **Aceternity UI**, **Magic UI** | Instalados via CLI do shadcn (código entra no projeto e é editável) |
| Fontes | `next/font` | Sem layout shift |

---

## 2. Direção de arte

### 2.1 Conceito: "Dark Luxury Tech"
- Fundo quase preto, profundo, nunca `#000` puro.
- Uma cor de destaque elétrica + uma cor "nobre" de apoio.
- Muito espaço em branco (espaço negativo), tipografia gigante, poucos elementos por tela.
- Camadas: fundo shader → textura de grão (noise) → vidro (glassmorphism sutil) → conteúdo.

### 2.2 Paleta (ajustável)
```css
:root {
  --bg:        #07070A;  /* fundo principal */
  --bg-2:      #0E0E14;  /* cards */
  --line:      rgba(255,255,255,0.08); /* bordas finas */
  --text:      #F5F5F7;
  --muted:     #8A8A96;
  --accent:    #7C5CFF;  /* violeta elétrico (cor principal) */
  --accent-2:  #22D3EE;  /* ciano (dados/tecnologia) */
  --gold:      #E8D3A2;  /* champanhe — detalhes premium, números */
}
```
Alternativa de paleta: verde-esmeralda `#10B981` + champanhe (remete a "dinheiro/crescimento").

### 2.3 Tipografia (gratuitas, sensação premium)
- **Títulos display:** `Instrument Serif` (itálico em palavras-chave) **misturado** com `Geist` ou `Inter Tight` em peso 500–600. A mistura serif itálica + sans é marca registrada de sites de luxo atuais.
  - Ex.: "Tráfego que vira *faturamento*." (a palavra *faturamento* em Instrument Serif itálico)
- **Corpo:** `Geist` ou `Inter`, 16–18px, cor `--muted`.
- **Números/métricas:** `Geist Mono` ou `JetBrains Mono` com `font-variant-numeric: tabular-nums`.
- Títulos do hero: `clamp(3rem, 8vw, 8rem)`, `letter-spacing: -0.04em`, `line-height: 0.95`.

### 2.4 Detalhes que separam o "bonito" do "premium"
1. **Grão/noise** por cima de tudo (overlay SVG com `opacity: 0.04–0.06`, `pointer-events: none`).
2. **Bordas de 1px** com `--line` e um brilho que percorre a borda no hover.
3. **Spotlight** que segue o mouse dentro dos cards.
4. **Easing customizado** em tudo: `cubic-bezier(0.16, 1, 0.3, 1)` (expo out). Nunca `linear` ou `ease` padrão em UI.
5. **Durações:** microinterações 150–300ms; entradas 600–1200ms; nada piscando rápido.
6. **Cursor customizado** (opcional, só desktop): círculo que cresce sobre links/botões.
7. **Botões magnéticos**: o botão "puxa" levemente em direção ao cursor.
8. **Preloader** curto (≤1,5s) com contador 0→100 e revelação em cortina.

---

## 3. Catálogo de efeitos (o que usar e onde)

### 3.1 Fundos com degradê em movimento

**Opção A — React Bits (reactbits.dev → Backgrounds).** Fundos WebGL prontos. Os mais sofisticados para este projeto:
- `Aurora` — aurora boreal suave (ótimo para o hero)
- `SoftAurora`, `Silk`, `Iridescence`, `LiquidChrome`, `Grainient` — degradês fluidos/sedosos
- `DarkVeil`, `LightRays`, `Beams`, `LightPillar` — feixes de luz dramáticos
- `Threads`, `FloatingLines`, `LineWaves` — linhas elegantes que ondulam (sensação de "dados")
- `LiquidEther` — fluido interativo que reage ao mouse
- `Prism`, `PrismaticBurst` — prisma de luz

Instalação (padrão do React Bits): `npx shadcn@latest add https://reactbits.dev/r/<Componente>-TS-TW`

```bash
npx shadcn@latest add https://reactbits.dev/r/Aurora-TS-TW
```
```tsx
<div className="absolute inset-0 -z-10">
  <Aurora colorStops={["#7C5CFF", "#22D3EE", "#7C5CFF"]} amplitude={1} blend={0.5} speed={0.5} />
</div>
```

**Opção B — Paper Shaders** (shaders.paper.design). Leves, zero dependências, visual de altíssimo nível: `MeshGradient`, `GrainGradient`, `LiquidMetal`, `NeuroNoise`, `FlutedGlass` (vidro canelado — muito "luxo"), `SmokeRing`, `Dithering`, `Metaballs`.

```bash
npm i @paper-design/shaders-react@0.0.76   # fixar versão exata, a lib ainda muda entre 0.0.x
```
```tsx
'use client';
import { MeshGradient } from '@paper-design/shaders-react';

<MeshGradient
  className="absolute inset-0 -z-10"
  colors={['#07070A', '#7C5CFF', '#22D3EE', '#0E0E14']}
  distortion={0.8}
  swirl={0.4}
  speed={0.15}
/>
```

**Opção C — CSS puro (fallback leve / mobile; é a base desta proposta):**
```css
.bg-blobs { position: fixed; inset: 0; z-index: -1; overflow: hidden; background: var(--bg); }
.bg-blobs::before, .bg-blobs::after {
  content: ""; position: absolute; width: 60vw; height: 60vw; border-radius: 50%;
  filter: blur(120px); opacity: .45; animation: drift 22s ease-in-out infinite alternate;
}
.bg-blobs::before { background: var(--accent);   top: -20%; left: -10%; }
.bg-blobs::after  { background: var(--accent-2); bottom: -25%; right: -15%; animation-delay: -11s; }
@keyframes drift { to { transform: translate(15vw, 10vh) scale(1.2); } }
```

**Regra:** apenas UM shader WebGL pesado visível por vez. Pausar shaders fora da viewport (IntersectionObserver). No mobile, usar versão CSS ou shader com `speed` reduzido.

### 3.2 Textos dinâmicos

**React Bits → Text Animations** (instalar como acima):
- `SplitText` / `BlurText` — entrada letra a letra / palavra a palavra com blur (títulos de seção)
- `RotatingText` — palavra que troca no hero: "Mais **[vendas | leads | clientes | faturamento]**"
- `DecryptedText` / `ScrambledText` — efeito "decodificando" (ótimo para números e termos técnicos)
- `ShinyText` / `GradientText` — brilho que passa pelo texto (badges, CTAs)
- `ScrollReveal` / `ScrollFloat` — parágrafo que "acende" conforme o scroll
- `ScrollVelocity` — faixa de texto gigante que corre com a velocidade do scroll
- `TextPressure` / `VariableProximity` — texto que reage ao mouse (uso pontual, uma vez no site)
- `CountUp` — contador de números
- `TrueFocus` — foco/desfoque alternando entre palavras

**GSAP SplitText (máximo controle, padrão Awwwards)** — títulos revelando linha a linha, saindo de uma "máscara":
```tsx
'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export function RevealTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    SplitText.create(ref.current!, {
      type: 'lines,words',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110, opacity: 0, duration: 1.1, stagger: 0.08, ease: 'expo.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        }),
    });
  }, { scope: ref });
  return <h2 ref={ref}>{children}</h2>;
}
```
Versão JS puro (para esta proposta):
```js
gsap.registerPlugin(ScrollTrigger, SplitText);
document.querySelectorAll('[data-reveal]').forEach((el) => {
  SplitText.create(el, {
    type: 'lines,words', mask: 'lines', autoSplit: true,
    onSplit: (self) => gsap.from(self.lines, {
      yPercent: 110, opacity: 0, duration: 1.1, stagger: 0.08, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    }),
  });
});
```

### 3.3 Ícones que se animam
- **lucide-animated** (lucide-animated.com): centenas de ícones Lucide animados com Motion, MIT, animam no hover e podem ser disparados por código. Instalação por ícone:
  `npx shadcn@latest add "https://lucide-animated.com/r/<nome-do-icone>.json"`
- **Its Hover** (itshover.com) — mesmo esquema: `npx shadcn@latest add https://itshover.com/r/<icone>.json`
- **AnimateIcons** — `npm i @animateicons/react`
- **Lottie / Rive** (opcional) para 1–2 ilustrações animadas exclusivas (ex.: funil de vendas animado). Preferir **Rive** (mais leve e interativo).
- **GSAP DrawSVG** para ícones/linhas que se "desenham" ao entrar na tela (é o caminho desta proposta: SVG Lucide inline + DrawSVG/CSS no hover).

Ícones sugeridos por serviço: `target` (segmentação), `chart-line`/`trending-up` (ROAS), `rocket` (escala), `radar` (rastreamento), `megaphone` (campanhas), `sparkles` (criativos), `chart-pie` (relatórios).

Regra: o ícone do card anima **quando o card inteiro** recebe hover (controlar via ref/`startAnimation()`), não só quando o mouse passa no ícone.

### 3.4 Cards, layouts e componentes premium
- **Bento grid** de serviços: `MagicBento` (React Bits) ou `Bento Grid` (Aceternity / Magic UI)
- **Spotlight no card**: `SpotlightCard` (React Bits) / `Card Spotlight` (Aceternity)
- **Borda com brilho percorrendo**: `BorderGlow`, `StarBorder`, `ElectricBorder` (React Bits) / `Border Beam`, `Shine Border` (Magic UI)
- **Card 3D com inclinação**: `TiltedCard` (React Bits) / `3D Card` (Aceternity)
- **Vidro realista**: `GlassSurface`, `FluidGlass` (React Bits)
- **Logos de clientes/plataformas correndo**: `LogoLoop` (React Bits) / `Marquee` (Magic UI)
- **Números**: `NumberTicker` (Magic UI) / `CountUp` (React Bits)
- **Cards empilhando no scroll**: `ScrollStack` (React Bits) — ótimo para o "Método"
- **Spotlight/lâmpada no topo de seção**: `Spotlight`, `Lamp Section Header` (Aceternity)
- **Botão magnético**: `Magnet` (React Bits)
- **Faísca ao clicar**: `ClickSpark` (React Bits) — sutil, só no CTA
- **Navbar que encolhe no scroll**: `Resizable Navbar` (Aceternity) ou `PillNav` (React Bits)
- **Mockup de dispositivo**: `Safari` / `iPhone` (Magic UI) para mostrar dashboards
- **Brilho no hover de imagens**: `GlareHover` (React Bits)
- **Desfoque gradual no rodapé da tela**: `GradualBlur` (React Bits)

### 3.5 Scroll suave + scroll storytelling
```tsx
// app/providers/SmoothScroll.tsx
'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return <>{children}</>;
}
```
Versão JS puro (para esta proposta):
```js
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
```
Técnicas de scroll a usar:
- **Pin + scrub**: seção fica presa enquanto o conteúdo muda (ex.: etapas do método).
- **Scroll horizontal** dentro de uma seção vertical (cases).
- **Parallax** em camadas (fundo mais lento que o conteúdo).
- **Imagem/vídeo que expande** de card para tela cheia (`ScrollExpand` do React Bits).
- **Gráfico que se desenha** conforme o scroll (linha de crescimento com DrawSVG ou `pathLength` do Motion).

### 3.6 Microinterações padrão (Motion)
```tsx
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} />
```
Botão: `whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.98 }}` + brilho deslizando por dentro.

### 3.7 Textura de grão (overlay global)
```tsx
<div aria-hidden className="pointer-events-none fixed inset-0 z-[100] opacity-[0.05] mix-blend-overlay"
  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
```

### 3.8 3D (opcional, nível "Meu Deus")
Com React Three Fiber + Drei: um **objeto de vidro/metal líquido** girando lentamente no hero (ex.: esfera ou forma abstrata com `MeshTransmissionMaterial`), reagindo levemente ao mouse. Alternativas sem código 3D: `LiquidMetal` (Paper Shaders), `Orb` ou `LiquidChrome` (React Bits), ou cena exportada do **Spline** (`@splinetool/react-spline`). Carregar com `dynamic(() => import(...), { ssr: false })` e mostrar placeholder estático no mobile.

---

## 4. Estrutura do site institucional (futuro)

> Para a proposta, usar a estrutura da **Parte A.3**. Esta lista é para o site institucional.

**0. Preloader** — tela preta, contador 0→100 em fonte mono, logo aparece, cortina sobe revelando o hero (≤1,5s; só na primeira visita).

**1. Navbar** — fixa, transparente, vira pílula de vidro com blur ao rolar. Logo à esquerda, links (Serviços, Método, Cases, FAQ), CTA "Falar com especialista" (botão magnético) à direita.

**2. Hero** — fundo `Aurora` ou `MeshGradient` + grão; badge com `ShinyText`; título gigante com `RotatingText`; subtítulo; 2 CTAs; 3 métricas com `CountUp`; indicador de scroll.

**3. Faixa de plataformas** — `LogoLoop` monocromático com fade nas laterais.

**4. Manifesto / problema** — parágrafo grande com `ScrollReveal`.

**5. Serviços (bento grid)** — 5–6 cards com spotlight + borda brilhante + ícone animado.

**6. Método (scroll pinado)** — 4 etapas, número gigante mudando, linha de progresso.

**7. Dashboard em destaque** — mockup de painel (ilustrativo) inclinado em 3D que se endireita no scroll.

**8. Cases / resultados** — scroll horizontal com cards e gráficos animados.

**9. Diferenciais** — lista elegante estilo Linear.

**10. Depoimentos** — marquee duplo com cards de vidro (só depoimentos reais).

**11. FAQ** — accordion suave.

**12. CTA final** — tela cheia com `LightRays` ou `Beams`, formulário curto + WhatsApp.

**13. Rodapé** — nome/logo gigante, links, redes sociais, CNPJ.

**Extra:** botão flutuante de WhatsApp (aparece após rolar 30% da página).

---

## 5. Regras de performance (inegociáveis)
- Lighthouse ≥ 90 em Performance no desktop; mobile o mais alto possível.
- Componentes WebGL/3D carregados depois do conteúdo principal.
- Pausar animações/shaders fora da viewport.
- Imagens em AVIF/WebP com dimensões declaradas.
- Fontes com `display: swap`.
- Animar só `transform`, `opacity` e `filter`; nunca `width/height/top/left`.
- Respeitar `prefers-reduced-motion`: desligar Lenis, shaders animados e animações grandes.
- Mobile: menos efeitos, não menos qualidade. Sem cursor customizado, sem efeitos de hover dependentes de mouse, shader mais leve ou CSS.
- Sem layout shift (CLS ≈ 0).

## 6. Acessibilidade e SEO
- Contraste AA no texto principal; texto animado continua legível e selecionável no HTML.
- Elementos decorativos com `aria-hidden`.
- Navegação por teclado com foco visível estilizado.
- Metadata completa (title, description, Open Graph com imagem), `lang="pt-BR"`.
- No site institucional: schema.org `ProfessionalService`, Meta Pixel + GA4 + GTM e evento de conversão no clique do WhatsApp e no envio do formulário.

## 7. Organização do código (site institucional em Next.js)
```
app/
  layout.tsx            # fontes, metadata, SmoothScroll, grão
  page.tsx              # monta as seções
components/
  sections/             # Hero.tsx, Services.tsx, Method.tsx, Cases.tsx ...
  ui/                   # componentes shadcn / React Bits / Aceternity / Magic UI
  effects/              # RevealTitle, Grain, MagneticButton, Cursor
lib/
  motion.ts             # variants e easings compartilhados
content/
  site.ts               # TODOS os textos, números e links em um só arquivo
```
Para a proposta (HTML único): manter um objeto `CONTENT` no topo do `<script>` com WhatsApp, os números da A.5 e as constantes do simulador (A.5.4), para editar sem caçar no HTML.

---

## 8. PROMPT PRONTO PARA COLAR NA IA (proposta v2)

> Crie a proposta comercial **"Gestão de Tráfego Pago" da Box Marketing** como uma página única em **HTML + CSS + JS puro** (arquivo `proposta-trafego-pago-v2.html`), com **GSAP 3.13** (ScrollTrigger, SplitText, DrawSVG, ScrambleText) e **Lenis** por CDN. O visual deve seguir exatamente a referência `Prévia do Hero — Site de Tráfego Pago – Hero — Dark Luxury Tech.html`: fundo `#07070A` com blobs desfocados em movimento (violeta `#7C5CFF`, ciano `#22D3EE`, champanhe `#E8D3A2`), grid com máscara, grão, spotlight do mouse, navbar em pílula de vidro, Geist + Instrument Serif itálico + Geist Mono, easing `cubic-bezier(.16,1,.3,1)`.
>
> Siga a estrutura da **Parte A.3** deste briefing: Hero com **painel consolidado** (nada de métricas soltas), Manifesto, **Resultados em 4 pilares** (faturamento, orçamento, seguidores, leads, com os dados da A.5 e as notas de rodapé), **Potencial com simulador de verba**, Escopo em bento grid, Método pinado, **Investimento R$ 550/mês** (preço só nesta seção), Quem está por trás, CTA final e rodapé com CNPJ. **Sem FAQ. Nenhum nome de cliente**: só a área de atuação (Decisão 6). Mantenha `[PLACEHOLDER]`/`[CONFIRMAR]` onde indicado e não invente números.
>
> Mobile primeiro, `prefers-reduced-motion`, conteúdo visível sem JS, e `@media print` para exportar em PDF A4. Construa por etapas (A.8), começando por Base + Hero, e me mostre antes de seguir.

---

## 9. Referências para inspiração (abrir e estudar)
- **Referência principal desta proposta:** `Prévia do Hero — Site de Tráfego Pago – Hero — Dark Luxury Tech.html` (nesta pasta)
- **Anti-referência:** `anexos/RESULTADO NÃO ESPERADO - RUIM - ENGESSADO - SEM GRAÇA.pdf`
- **Bibliotecas:** reactbits.dev · ui.aceternity.com · magicui.design · shaders.paper.design · lucide-animated.com · itshover.com · 21st.dev · gsap.com/showcase
- **Galerias de sites premiados:** awwwards.com · godly.website · land-book.com · lapa.ninja · siteinspire.com
- **Sites de produto com padrão a imitar (nível de polimento):** linear.app · vercel.com · stripe.com · raycast.com · apple.com (páginas de produto)
- **Tutoriais de efeitos avançados:** tympanus.net/codrops
