# BRIEFING + PLANO — Proposta de Tráfego Pago Premium (v2) · Box Marketing

> **Para a IA que vai construir a página:** este documento tem duas partes.
> **Parte A** é o plano específico desta proposta: o que muda, decisões, estrutura seção por seção, copy, dados reais dos cases, assets e etapas. Ela manda.
> **Parte B** é o catálogo técnico de efeitos e direção de arte (o briefing original). Use como referência de acabamento. Onde a Parte B conflitar com a Parte A, vale a Parte A.
> Onde houver `[PLACEHOLDER]` ou `[CONFIRMAR]`, deixe marcado para o Thiago preencher. **Nunca invente números de resultado.** Todos os números da seção de cases vêm do relatório real (ver A.5).

---

# PARTE A — PLANO DA PROPOSTA

## A.0 O que muda em relação à proposta atual

Proposta atual: `proposta-trafego-pago.html` (maio/2026). Página escura simples, azul `#0066FF`, Inter, 5 blocos: escopo, investimento (R$ 750/mês), não incluso, quem sou, CTA. Sem prova, sem movimento, sem argumento de potencial.

| Item | Hoje | v2 |
|---|---|---|
| Visual | Cards estáticos, azul padrão | Dark Luxury Tech da referência do hero: blobs em movimento, grão, vidro, tipografia gigante serif itálico + sans, scroll suave, revelações |
| Preço | R$ 750/mês | **R$ 550/mês** |
| Prova | Nenhuma | **Cases reais** (Clínica CORE + infoproduto) com números do Gerenciador de Anúncios |
| Argumento | Lista de serviços | Seção **Potencial** com simulador interativo baseado nos resultados reais |
| Método | Não existe | 4 etapas em scroll pinado |
| FAQ | Não existe | 6 perguntas que quebram objeções |
| Escopo, não incluso, quem sou, CNPJ | Existe | Mantido, com novo visual |

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
Regra da casa: valores aparecem **apenas** na seção Investimento. O simulador do Potencial fala só de **verba de mídia**, nunca da mensalidade da gestão. Blocos de escopo e método não mostram preço.

### Decisão 4 — PDF continua possível
As propostas também são enviadas em PDF. A página precisa de um `@media print`: todas as animações desligadas, tudo visível no estado final, fundo escuro mantido (`print-color-adjust: exact`), quebra de página entre seções, simulador impresso com um valor padrão (ex.: R$ 1.000).

### Decisão 5 — Arquivo de saída
- Criar `proposta-trafego-pago-v2.html` nesta pasta (a v1 fica como histórico).
- Imagens em `trafego-pago-assets/` (copiar e comprimir; não apontar para a pasta do portfólio).
- Na publicação, sobe como `vemprabox.com.br/trafego-pago/index.html`.

## A.2 Direção de arte (resumo aplicado)

Seguir a referência `Prévia do Hero — Site de Tráfego Pago – Hero — Dark Luxury Tech.html` como **padrão visual de todas as seções**, não só do hero:
- Fundo `#07070A`; três blobs desfocados (violeta, ciano, champanhe) em `drift` de 22–30s; grid de 72px com máscara radial; grão SVG `opacity .07`; spotlight radial que segue o mouse; degradê para o preto na base de cada seção.
- Navbar em pílula de vidro (`backdrop-filter: blur(18px)`, borda `rgba(255,255,255,.09)`).
- Título: Geist 500, `letter-spacing: -0.045em`, `line-height: .98`; palavra-chave em **Instrument Serif itálico** com degradê (champanhe → branco, ou ciano/violeta).
- Números sempre em **Geist Mono**, cor champanhe `#E8D3A2`, `tabular-nums`.
- Cards: borda 1px `rgba(255,255,255,.08)`, fundo `rgba(255,255,255,.02)`, raio 18–26px, hover com borda champanhe.
- Botão primário: degradê violeta, brilho deslizando no hover, sombra violeta. Secundário: ghost com borda.
- Easing único `cubic-bezier(.16,1,.3,1)`. Entradas 0,9–1,2s. Microinterações 150–300ms.
- **Cada seção ganha uma variação de fundo** para a página não ficar monótona: hero (blobs), potencial (grid + linhas de dados), cases (fundo mais escuro, luz lateral), investimento (feixe de luz central atrás do card), CTA final (aurora intensa).

## A.3 Estrutura seção por seção

Navegação: `Potencial · Resultados · Escopo · Investimento` + botão "Falar no WhatsApp".

### 0 · Preloader (opcional, ≤ 1s)
Contador mono 0→100, logo aparece, cortina sobe. Só na primeira visita (`sessionStorage`). Desligado com `prefers-reduced-motion` e na impressão.

### 1 · Hero
Base: a referência, quase literal.
- Badge com ponto pulsando + texto com brilho: **"Proposta personalizada · Gestão de Tráfego Pago"**. Opcional: "para [NOME DO CLIENTE]".
- H1 em duas linhas com revelação por máscara: **"Anúncios que viram** *[faturamento. | clientes. | agenda cheia. | escala.]***"** (palavra rotativa em serif itálico).
- Subtítulo: "Estratégia, criativos e dados trabalhando juntos para que cada real investido em anúncio volte como cliente no seu WhatsApp."
- CTAs: **"Ver resultados reais"** (rola até Cases) e **"Falar no WhatsApp"** (ghost).
- 3 métricas **reais** com count-up (substituem os `[X]` da referência):
  - `R$ 17,5 mil` · em receita atribuída
  - `431` · conversas iniciadas no WhatsApp
  - `3,08x` · ROAS médio em vendas
  - Nota pequena abaixo: "*Soma de 6 campanhas selecionadas, ver Resultados."
- Painel flutuante à direita (vidro inclinado em 3D, gráfico se desenhando), agora com **dados reais** da campanha Guia do Fotógrafo 2.0: receita atribuída `R$ 10.313,46`, ROAS `3,31x`, compras `123`, custo por compra `R$ 25,30`. Rodapé do painel: "Dados reais de campanha · curva ilustrativa".
- Faixa de plataformas em marquee: Meta Ads · Instagram · Facebook · WhatsApp · Google Ads · YouTube · Google Analytics 4 · Tag Manager. `[CONFIRMAR: TikTok Ads entra no escopo?]` Se não, não listar.
- Indicador de scroll.

### 2 · Manifesto (o problema)
Parágrafo gigante em que as palavras acendem com o scroll (SplitText por palavra + ScrollTrigger scrub, de `#3A3A44` para `#F5F5F7`). Texto adaptado do Método Box:
> "Ter um perfil bonito e não anunciar é como ter um escritório lindo numa rua onde ninguém passa. **Conteúdo é a base.** Mas é o anúncio certo, para a pessoa certa, na hora certa, que coloca *gente na sua rua* e cliente no seu WhatsApp."

### 3 · Potencial (seção nova, uma das duas mais importantes)
Objetivo: fazer o cliente **enxergar o que dá para conquistar** antes de ver o preço.

**3a. Título:** "O seu próximo cliente *já está procurando.*" + linha de apoio: "A pergunta não é se existe demanda. É quem vai aparecer primeiro para ela."

**3b. Simulador interativo (o "uau" da seção).** Card grande de vidro com:
- Alternador de objetivo: **[ Conversas no WhatsApp ]** / **[ Vendas online ]**.
- Slider de **verba mensal de anúncios**: R$ 300 a R$ 5.000, passo R$ 100, padrão R$ 1.000.
- Resultados em números mono gigantes que recalculam com count-up suave a cada movimento:
  - Modo Conversas: `verba ÷ 6,23` (cenário conservador, média da conta CORE) até `verba ÷ 4,73` (média das campanhas selecionadas). Ex.: R$ 1.000 → **160 a 211 conversas/mês**. Mais: "≈ 5 a 7 conversas por dia".
  - Modo Vendas: compras = `verba ÷ 16,24` (custo médio por compra); receita atribuída = `verba × 3,08` (ROAS médio). Ex.: R$ 1.000 → **≈ 62 vendas e R$ 3.080 em receita atribuída**.
- Mini-gráfico de barras ao lado que cresce com o slider.
- Aviso fixo, legível, sem esconder: "Estimativa calculada com resultados reais de campanhas gerenciadas pela Box. Os números variam conforme nicho, oferta, região, criativos e atendimento. Não é promessa de resultado. Conversa não é agendamento; ROAS não é lucro."
- **Não mostrar a mensalidade aqui** (Decisão 3).

**3c. O caminho do cliente.** Funil horizontal que se desenha no scroll (DrawSVG): **Alcance → Clique → Conversa → Cliente**, cada etapa com ícone animado e uma frase do que a gestão faz nela (segmentação, criativo, oferta, acompanhamento). Sem números inventados.

**3d. (Opcional) Dados de mercado.** 2–3 cards com estatísticas de uso de Instagram/WhatsApp/Google no Brasil. **Só entram com fonte citada** `[PLACEHOLDER: número + fonte]`. Sem fonte, a seção sai.

### 4 · Resultados / Cases (a outra seção mais importante)
Título: "Resultados *reais*, com número de verdade." Sub: "Dados exportados do Gerenciador de Anúncios. Sem arredondar para cima."

Layout desktop: seção pinada com **scroll horizontal** entre os dois cases (GSAP ScrollTrigger + `xPercent`). Mobile: cards empilhados.

**Case 1 · Clínica CORE (saúde · diagnóstico por imagem)** `[CONFIRMAR autorização para citar o nome; se não, "Clínica de diagnóstico por imagem"]`
- Objetivo: conversas no WhatsApp.
- Números de destaque (count-up): **431 conversas** · **R$ 2.038,30 investidos** · **R$ 4,73 por conversa** (média das 3 campanhas).
- Gráfico de barras animado, custo por conversa: Ultrassom 4D `R$ 2,19` · Ecocardiograma jan/26 `R$ 4,32` · Ecocardiograma ago `R$ 5,52` · linha tracejada da **média da conta `R$ 6,23`**.
- Selo de destaque: "Ultrassom 4D: **R$ 2,19 por conversa**, cerca de 65% abaixo da média da conta."
- Visual: criativos reais da CORE dentro de um mockup de celular (ver A.6).
- Bloco "O que fizemos": `[PLACEHOLDER: Thiago descreve em 2–3 linhas a estratégia (público, criativo, oferta)]`.

**Case 2 · Infoproduto (O Guia do Fotógrafo)** `[CONFIRMAR autorização]`
- Objetivo: vendas online.
- Destaques: **350 vendas** · **R$ 5.685,42 investidos** · **R$ 17.501,02 em receita atribuída** · **ROAS 3,08x** · **R$ 16,24 por venda**.
- Gráfico investimento × receita por campanha (barras pareadas crescendo):
  - Guia do Fotógrafo 2.0: R$ 3.112,45 → R$ 10.313,46 · 123 vendas · ROAS 3,31x
  - Estrutura de Manutenção: R$ 2.314,88 → R$ 6.021,96 · 214 vendas · R$ 10,82/venda · ROAS 2,60x
  - Guia 2.0 (público quente): R$ 258,09 → R$ 1.165,60 · 13 vendas · ROAS 4,52x (indicar "amostra menor")
- Visual: `[PLACEHOLDER: criativos ou print da página de vendas do Guia]`.
- Bloco "O que fizemos": `[PLACEHOLDER]`.

Rodapé da seção (texto pequeno, obrigatório): "Campanhas selecionadas de relatórios entre 10/10/2023 e 10/11/2026. Conversas não equivalem a agendamentos confirmados. Receita e compras são atribuídas pela plataforma; ROAS não representa lucro."

Reforço forte (opcional, muito recomendado): **prints reais do Gerenciador** com nomes de cliente borrados, num carrossel de vidro. `[PLACEHOLDER: Thiago envia 2–4 prints]`.

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
Card dividido: foto (`foto-thiago.jpg`) com leve parallax + bio atual (Rio Grande, publicitário pela UCPel, desde 2022, advocacia, saúde e educação) + tags. Abaixo, faixa de **bastidores** (4 fotos de captação reais, ver A.6) em marquee lento: mostra que existe operação de verdade por trás.

### 9 · FAQ
Accordion suave. Perguntas (respostas `[CONFIRMAR]` onde depender de política comercial):
1. Em quanto tempo começo a ver resultado?
2. Quanto preciso investir em anúncios além da gestão?
3. Vocês criam os anúncios (artes e vídeos)?
4. Preciso ter site?
5. Tem fidelidade? Posso cancelar?
6. Como acompanho os resultados?

### 10 · CTA final + rodapé
- Seção em tela cheia, aurora mais intensa: **"Vamos colocar *gente na sua rua?*"**
- Botões: "Aprovar proposta no WhatsApp" (primário) e "Tirar uma dúvida" (ghost).
- Rodapé: wordmark **BOX MARKETING** gigante ocupando a largura, em contorno sutil; linha: LUIZA SANTOS OSORIO LTDA · CNPJ 53.091.213/0001-32 · e-mail · validade da proposta.
- Botão flutuante de WhatsApp aparece após 30% de scroll.
- `[PLACEHOLDER: número de WhatsApp e mensagem padrão]`.

## A.4 Copy — tom
Direto, confiante, sem jargão vazio ("alavancar", "potencializar", "resultados exponenciais"). Frases curtas. Termos técnicos (ROAS, pixel, BM) só onde o cliente precisa, e com explicação curta na primeira vez. Português com acentuação correta.

## A.5 Dados dos cases (fonte única da verdade)
Fonte: `Portfolio Social Media/Cases_Trafego_Pago_CORE_e_Infoprodutos.pdf`.

| Conta | Campanha | Resultado | Investimento | Custo/resultado | Receita atribuída | ROAS |
|---|---|---|---|---|---|---|
| CORE | Ultrassom 4D | 62 conversas | R$ 135,90 | R$ 2,19 | | |
| CORE | Ecocardiograma (ago) | 256 conversas | R$ 1.414,25 | R$ 5,52 | | |
| CORE | Ecocardiograma (jan/26) | 113 conversas | R$ 488,15 | R$ 4,32 | | |
| **CORE total** | | **431 conversas** | **R$ 2.038,30** | **R$ 4,73** | | |
| CORE | média ponderada da conta | | | R$ 6,23 | | |
| Infoproduto | Guia do Fotógrafo 2.0 | 123 vendas | R$ 3.112,45 | R$ 25,30 | R$ 10.313,46 | 3,31x |
| Infoproduto | Estrutura de Manutenção | 214 vendas | R$ 2.314,88 | R$ 10,82 | R$ 6.021,96 | 2,60x |
| Infoproduto | Guia 2.0 (quente) | 13 vendas | R$ 258,09 | R$ 19,85 | R$ 1.165,60 | 4,52x |
| **Infoproduto total** | | **350 vendas** | **R$ 5.685,42** | **R$ 16,24** | **R$ 17.501,02** | **3,08x** |

Totais calculados a partir das linhas do PDF. Total investido nas 6 campanhas: R$ 7.723,72.
Regras: não somar conversas com vendas num "resultado" único; sempre chamar de "receita atribuída"; manter as ressalvas do PDF.

## A.6 Assets

| Asset | Origem | Uso |
|---|---|---|
| Logo | `Proposta FAURG/logo.png` | Navbar, preloader, rodapé |
| Foto do Thiago | `Proposta FAURG/foto-thiago.jpg` | Quem está por trás |
| Criativos CORE | `Portfolio Social Media/apresentacao/assets/frames/core_*.jpg`, `.../assets/ig/core_*.jpg`, `Portfolio Social Media/Core/Estáticos/` | Mockup de celular no Case 1 |
| Bastidores | `Portfolio Social Media/apresentacao/assets/bastidores/bastidor-1..4.jpg` (ou os 4 `WhatsApp Image 2026-11-10...jpeg`) | Faixa de bastidores |
| Criativos do Guia do Fotógrafo | `[PLACEHOLDER]` | Case 2 |
| Prints do Gerenciador (borrados) | `[PLACEHOLDER]` | Prova extra nos cases |
| Nova og:image 1200×630 | Criar no visual novo | Prévia do link no WhatsApp |

Todas as imagens: copiar para `trafego-pago-assets/`, converter para WebP, largura máxima 1200px, `loading="lazy"` fora do hero.

## A.7 Requisitos técnicos desta versão
- **Mobile primeiro**: a maioria abre pelo WhatsApp. No mobile: blobs com menos blur e menos camadas, sem spotlight de mouse, sem cursor custom, scroll horizontal dos cases vira pilha vertical, seção do método sem pin (etapas empilhadas com revelação simples).
- Lenis + ScrollTrigger sincronizados (exemplo na Parte B, 3.5, adaptado para JS puro).
- Animar só `transform`, `opacity` e `filter`.
- `prefers-reduced-motion`: sem Lenis, sem drift dos blobs, sem palavra rotativa (mostra "faturamento."), conteúdo visível de imediato.
- Sem JS: todo o conteúdo precisa estar visível (estado inicial das animações aplicado via classe `.js` no `<html>`).
- Simulador acessível: `<input type="range">` nativo estilizado, valores em `aria-live="polite"`.
- `@media print` (Decisão 4).
- Meta tags e Open Graph atualizados (título, descrição sem preço, nova imagem).
- Evento de clique no WhatsApp pronto para pixel `[OPCIONAL]`.
- Meta: carregamento no 4G abaixo de 2,5s até o hero aparecer; sem layout shift.

## A.8 Etapas de execução (mostrar e aprovar cada uma)
1. **Base + Hero**: tokens, fontes, fundo, navbar, hero com métricas reais, painel, marquee. → aprovação do visual
2. **Manifesto + Potencial**: texto que acende, simulador, funil. → aprovação
3. **Cases**: dois cases, gráficos, mockups, ressalvas. → aprovação
4. **Escopo + Método**: bento grid e etapas pinadas.
5. **Investimento + Quem + FAQ + CTA + rodapé**.
6. **QA**: celular real (Android e iPhone), reduced-motion, impressão em PDF A4, ortografia, links do WhatsApp.
7. **Publicação**: og:image nova, subir em `vemprabox.com.br/trafego-pago/`, testar a prévia do link no WhatsApp.

## A.9 Pendências para o Thiago
1. Autorização para citar **CORE** e **Guia do Fotógrafo** pelo nome (ou usar descrição genérica).
2. 2–3 linhas de "o que fizemos" para cada case.
3. Criativos do Guia do Fotógrafo e, se possível, 2–4 prints do Gerenciador.
4. TikTok Ads entra no escopo?
5. Número do WhatsApp e mensagem padrão.
6. Condições: pagamento, fidelidade, validade da proposta, verba mínima recomendada.
7. Prazo para campanhas no ar após a liberação dos acessos.
8. Paleta: Opção A (referência) ou B (coral da marca).
9. Proposta genérica ou personalizada com o nome do cliente no hero?

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
Para a proposta (HTML único): manter um objeto `CONTENT` no topo do `<script>` com WhatsApp, números dos cases e constantes do simulador (6,23 · 4,73 · 16,24 · 3,08), para editar sem caçar no HTML.

---

## 8. PROMPT PRONTO PARA COLAR NA IA (proposta v2)

> Crie a proposta comercial **"Gestão de Tráfego Pago" da Box Marketing** como uma página única em **HTML + CSS + JS puro** (arquivo `proposta-trafego-pago-v2.html`), com **GSAP 3.13** (ScrollTrigger, SplitText, DrawSVG, ScrambleText) e **Lenis** por CDN. O visual deve seguir exatamente a referência `Prévia do Hero — Site de Tráfego Pago – Hero — Dark Luxury Tech.html`: fundo `#07070A` com blobs desfocados em movimento (violeta `#7C5CFF`, ciano `#22D3EE`, champanhe `#E8D3A2`), grid com máscara, grão, spotlight do mouse, navbar em pílula de vidro, Geist + Instrument Serif itálico + Geist Mono, easing `cubic-bezier(.16,1,.3,1)`.
>
> Siga a estrutura da **Parte A.3** deste briefing: Hero (métricas reais), Manifesto, **Potencial com simulador de verba**, **Cases reais** (CORE e infoproduto, dados da tabela A.5, com as ressalvas), Escopo em bento grid, Método pinado, **Investimento R$ 550/mês** (preço só nesta seção), Quem está por trás, FAQ, CTA final e rodapé com CNPJ. Mantenha `[PLACEHOLDER]`/`[CONFIRMAR]` onde indicado e não invente números.
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
