// ---------- dados das obras (fonte única para index.html e obra.html) ----------
// Cada obra: t título, a autor, e época, s situação, d domínio a partir de (se protegida),
// esc escola ou tema, ed edição indicada (vazio = em conferência),
// sym símbolos conferidos ("◇ ✎" etc.), links por formato (vazio = não mostrar)
const ERAS = [
  {id:"antig", nome:"Antiguidade", cor:"#4E4236"},
  {id:"medio", nome:"Idade Média e mundo islâmico", cor:"#3C4A42"},
  {id:"renasc", nome:"Renascimento e política moderna", cor:"#64393A"},
  {id:"ilum", nome:"Iluminismo e contrato", cor:"#33455A"},
  {id:"liberal", nome:"Liberalismo clássico", cor:"#4A3D57"},
  {id:"xix", nome:"Século XIX", cor:"#5A5034"},
  {id:"xx", nome:"Século XX e Brasil", cor:"#364B4B"},
];

const OBRAS = [
  // Antiguidade
  {t:"A República", a:"Platão (428–348 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega",
   img:"https://m.media-amazon.com/images/I/71p9NTtFrzL._SL1500_.jpg",
   sobre:{
     obra:"A República é talvez o livro que mais moldou a forma como o Ocidente pensa a política. Platão o escreveu como um longo diálogo em que Sócrates e alguns interlocutores discutem o que é uma vida boa, como deve ser uma cidade bem ordenada e, sobretudo, o que é a justiça.\n\nA pergunta de partida é simples e desconcertante. As primeiras respostas, como «dar a cada um o que lhe é devido», são examinadas e postas à prova uma a uma. O desafio mais forte vem de Glauco, que pede a Sócrates que prove que ser justo é melhor do que parecer justo, mesmo que a injustiça trouxesse vantagens sem que ninguém percebesse.\n\nPara responder, Platão constrói uma cidade no discurso, e a estrutura dela espelha a da alma: produtores, guardiões e governantes filósofos. A justiça aparece quando cada parte cumpre a sua função sem invadir a dos outros. Essa cidade também é uma escola. A música, a ginástica, a matemática e a dialética formam o caráter antes de formar o soldado ou o governante.\n\nMuitas imagens atravessam o livro e permanecem na memória, como a alegoria da caverna, em que homens presos desde a infância tomam sombras projetadas na parede pela própria realidade. Ler A República é, em parte, aprender a desconfiar das opiniões que parecem óbvias e a perguntar o que as sustenta.\n\nPor que ler hoje? Porque o livro não entrega respostas prontas. Ele obriga o leitor a pensar sobre poder, desigualdade, educação e a relação entre o indivíduo e a comunidade, e deixa uma pergunta que continua aberta: uma sociedade justa depende de governantes raros, ou pode ser construída por cidadãos comuns que pensam bem?"
   },
   edicoes:[
     {nome:"Edipro", sym:"◆ ✎", img:"https://m.media-amazon.com/images/I/71p9NTtFrzL._SL1500_.jpg",
      ed:"Edipro, 496 páginas. Tradução do grego por Edson Bini, com notas de rodapé.",
      sobre:"Terceira edição da Edipro (2019), com 496 páginas. Traduzida do grego por Edson Bini, a partir do texto estabelecido por Hermann para a Teubner. Traz a numeração de Stephanus nas margens, uma cronologia da obra de Platão, dados biográficos e uma sinopse dos temas.",
      links:{simples:"https://www.amazon.com.br/dp/8552100746?tag=acidadela-20", kindle:"https://www.amazon.com.br/dp/B084RKRNPH?tag=acidadela-20"}},
     {nome:"Principis", sym:"◇ ✎", img:"https://m.media-amazon.com/images/I/61iW5sHVzdL._SL1500_.jpg",
      ed:"Principis, 640 páginas. Tradução do inglês por Fábio Meneses Santos, com comentário de Benjamin Jowett.",
      sobre:"Edição da Principis (2021), com 640 páginas. Traduzida do inglês, a partir da versão de Benjamin Jowett, que acompanha o texto com comentários e uma análise extensa da obra. Por ser feita de outra língua, não substitui a tradução direta do grego, mas oferece um comentário amplo para quem busca uma leitura guiada.",
      links:{simples:"https://www.amazon.com.br/dp/6555524146?tag=acidadela-20", kindle:"https://www.amazon.com.br/dp/B0929B4C8N?tag=acidadela-20"}}
   ]},
  {t:"Apologia de Sócrates", a:"Platão (428–348 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega",
   sobre:{obra:"A Apologia de Sócrates relata a defesa do filósofo diante de um tribunal de Atenas, em 399 a.C. Acusado de não reconhecer os deuses da cidade, de introduzir divindades novas e de corromper a juventude, Sócrates enfrentava a pena de morte. O texto é tradicionalmente atribuído a Platão, que estava presente.\n\nSócrates não recorre à emoção. Em vez de pedir a piedade dos juízes, como era costume, examina cada acusação. Mostra que nunca cobrou por seus ensinamentos e explica de onde veio sua missão, a partir de uma resposta do oráculo de Delfos. Afirma que preferiria a morte a abandonar a filosofia, porque para ele uma vida sem exame não vale a pena ser vivida.\n\nUm júri de 501 cidadãos o declarou culpado. A condenação e as palavras finais de Sócrates, sobre o que é morrer e o que é viver, fecham o texto com a mesma coerência com que ele viveu.\n\nPor que ler? Porque é um dos registros mais diretos de um pensador que deu sua vida à pergunta. O texto é curto, o estilo é claro e o tema segue atual: o que significa dizer a verdade a quem tem poder sobre nós, e até onde vai a coragem de quem pensa diferente da maioria."},
   edicoes:[
     {nome:"Edipro", sym:"", img:"https://m.media-amazon.com/images/I/61-2MFPstpL._SL1422_.jpg",
      ed:"Edipro, 2019, edição de bolso. Tradução de Edson Bini. Origem da tradução e notas em conferência.",
      sobre:"Edição de bolso da Edipro (2019), com 80 páginas. Tradução de Edson Bini. A indicação de origem da tradução e a presença de notas ainda estão em conferência.",
      links:{bolso:"https://www.amazon.com.br/dp/8552100665?tag=acidadela-20"}},
     {nome:"Vozes de Bolso", sym:"",
      img:"https://m.media-amazon.com/images/I/51k7oEE0GZL._SL1000_.jpg",
      ed:"Vozes de Bolso, 1ª edição, 56 páginas. Tradução de Márcio Mauá Chaves Ferreira. Origem da tradução em conferência.",
      sobre:"Edição de bolso da Vozes de Bolso, com 56 páginas e tradução de Márcio Mauá Chaves Ferreira. A língua de origem ainda está em conferência.",
      links:{simples:"https://www.amazon.com.br/dp/8532664377?tag=acidadela-20"}},
     {nome:"Nova Fronteira", sym:"",
      img:"https://m.media-amazon.com/images/I/91YGPexFSML._SL1500_.jpg",
      ed:"Nova Fronteira, 133 páginas. Tradução de Maria Lacerda de Moura, com tradução e apêndice de Gisele Garcia. Origem da tradução em conferência.",
      sobre:"Edição digital da Nova Fronteira, na coleção Clássicos para Todos. A língua de origem ainda está em conferência.",
      links:{kindle:"https://www.amazon.com.br/dp/B07XRJ8CY5?tag=acidadela-20"}}
   ]},
  {t:"Ética a Nicômaco", a:"Aristóteles (384–322 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega"},
  {t:"Política", a:"Aristóteles (384–322 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega"},
  {t:"Carta a Meneceu", a:"Epicuro (341–270 a.C.)", e:"antig", s:"PD", esc:"Epicurismo"},
  {t:"O Manual", a:"Epicteto (c. 55–135)", e:"antig", s:"PD", esc:"Estoicismo", leitura:"Texto em inglês, Project Gutenberg"},
  {t:"Meditações", a:"Marco Aurélio (121–180)", e:"antig", s:"PD", esc:"Estoicismo", leitura:"Texto em inglês, Project Gutenberg (tradução de Long)"},
  {t:"Cartas a Lucílio", a:"Sêneca (c. 4 a.C.–65)", e:"antig", s:"PD", esc:"Estoicismo"},
  {t:"Dos Deveres", a:"Cícero (106–43 a.C.)", e:"antig", s:"PD", esc:"Política romana"},
  // Idade Média e mundo islâmico
  {t:"Confissões", a:"Agostinho (354–430)", e:"medio", s:"PD", esc:"Escolástica"},
  {t:"A Cidade de Deus", a:"Agostinho (354–430)", e:"medio", s:"PD", esc:"Escolástica"},
  {t:"Suma Teológica (trechos)", a:"Tomás de Aquino (1225–1274)", e:"medio", s:"PD", esc:"Escolástica"},
  {t:"A Cidade Virtuosa", a:"Al-Farabi (c. 872–950)", e:"medio", s:"PD", esc:"Filosofia islâmica"},
  // Renascimento e política moderna
  {t:"O Príncipe", a:"Maquiavel (1469–1527)", e:"renasc", s:"PD", esc:"Realismo político", leitura:"Texto em inglês, Project Gutenberg"},
  {t:"Utopia", a:"Thomas More (1478–1535)", e:"renasc", s:"PD", esc:"Utopia"},
  {t:"Discurso da Servidão Voluntária", a:"Étienne de La Boétie (1530–1563)", e:"renasc", s:"PD", esc:"Servidão voluntária"},
  // Iluminismo e contrato
  {t:"Leviatã", a:"Thomas Hobbes (1588–1679)", e:"ilum", s:"PD", esc:"Contratualismo"},
  {t:"Segundo Tratado sobre o Governo", a:"John Locke (1632–1704)", e:"ilum", s:"PD", esc:"Contratualismo"},
  {t:"Do Contrato Social", a:"Jean-Jacques Rousseau (1712–1778)", e:"ilum", s:"PD", esc:"Contratualismo"},
  {t:"Do Espírito das Leis", a:"Montesquieu (1689–1755)", e:"ilum", s:"PD", esc:"Iluminismo"},
  {t:"Cândido", a:"Voltaire (1694–1778)", e:"ilum", s:"PD", esc:"Iluminismo"},
  {t:"O que é esclarecimento?", a:"Immanuel Kant (1724–1804)", e:"ilum", s:"PD", esc:"Iluminismo"},
  {t:"Reflexões sobre a Revolução em França", a:"Edmund Burke (1729–1797)", e:"ilum", s:"PD", esc:"Tradição conservadora"},
  // Liberalismo clássico
  {t:"A Riqueza das Nações", a:"Adam Smith (1723–1790)", e:"liberal", s:"PD", esc:"Economia clássica"},
  {t:"A Lei", a:"Frédéric Bastiat (1801–1850)", e:"liberal", s:"PD", esc:"Economia clássica"},
  {t:"A Democracia na América", a:"Alexis de Tocqueville (1805–1859)", e:"liberal", s:"PD", esc:"Liberalismo clássico"},
  {t:"Sobre a Liberdade", a:"John Stuart Mill (1806–1873)", e:"liberal", s:"PD", esc:"Liberalismo clássico"},
  {t:"Desobediência Civil", a:"Henry David Thoreau (1817–1862)", e:"liberal", s:"PD", esc:"Desobediência civil", leitura:"Texto em inglês, Project Gutenberg"},
  {t:"A Arte de Ter Razão", a:"Arthur Schopenhauer (1788–1860)", e:"liberal", s:"PD", esc:"Pessimismo e ética"},
  // Século XIX
  {t:"Fenomenologia do Espírito", a:"G. W. F. Hegel (1770–1831)", e:"xix", s:"PD", esc:"Idealismo"},
  {t:"Manifesto do Partido Comunista", a:"Karl Marx e Friedrich Engels", e:"xix", s:"PD", esc:"Socialismo"},
  {t:"Temor e Tremor", a:"Søren Kierkegaard (1813–1855)", e:"xix", s:"PD", esc:"Existencialismo precoce"},
  {t:"Genealogia da Moral", a:"Friedrich Nietzsche (1844–1900)", e:"xix", s:"PD", esc:"Crítica da moral"},
  {t:"Psicologia das Multidões", a:"Gustave Le Bon (1841–1931)", e:"xix", s:"PD", esc:"Psicologia social"},
  {t:"Ciência e Política como Vocação", a:"Max Weber (1864–1920)", e:"xix", s:"PD", esc:"Sociologia"},
  // Século XX e Brasil
  {t:"Ação Humana", a:"Ludwig von Mises (1881–1973)", e:"xx", s:"P", d:"2044", esc:"Escola austríaca"},
  {t:"O Caminho da Servidão", a:"Friedrich Hayek (1899–1992)", e:"xx", s:"P", d:"2063", esc:"Escola austríaca"},
  {t:"Origens do Totalitarismo", a:"Hannah Arendt (1906–1975)", e:"xx", s:"P", d:"2046", esc:"Totalitarismo"},
  {t:"1984", a:"George Orwell (1903–1950)", e:"xx", s:"PD", d:"2021", esc:"Totalitarismo"},
  {t:"Admirável Mundo Novo", a:"Aldous Huxley (1894–1963)", e:"xx", s:"P", d:"2034", esc:"Totalitarismo"},
  {t:"A Sociedade Aberta e seus Inimigos", a:"Karl Popper (1902–1994)", e:"xx", s:"P", d:"2065", esc:"Liberalismo crítico"},
  {t:"O Ópio dos Intelectuais", a:"Raymond Aron (1905–1983)", e:"xx", s:"P", d:"2054", esc:"Liberalismo crítico"},
  {t:"Casa-Grande & Senzala", a:"Gilberto Freyre (1900–1987)", e:"xx", s:"P", d:"2058", esc:"Pensamento brasileiro"},
  {t:"Raízes do Brasil", a:"Sérgio Buarque de Holanda (1902–1982)", e:"xx", s:"P", d:"2053", esc:"Pensamento brasileiro"},
  {t:"O Povo Brasileiro", a:"Darcy Ribeiro (1922–1997)", e:"xx", s:"P", d:"2068", esc:"Pensamento brasileiro"},
];

// Formatos de edição, na ordem em que aparecem na página da obra
const FORMATOS = [
  {k:"simples", rotulo:"Capa simples"},
  {k:"dura", rotulo:"Capa dura"},
  {k:"kindle", rotulo:"Kindle"},
  {k:"bolso", rotulo:"Bolso"},
];

// Identificador da página da obra (ex.: "A República" -> "a-republica")
function slugObra(t){
  return t.normalize("NFD").replace(/[̀-ͯ]/g,"")
    .toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
}
OBRAS.forEach(o => {
  o.slug = slugObra(o.t);
  // Obras com uma edição usam os campos ed/sym/links; obras com várias usam edicoes[]
  if(!o.edicoes){
    o.edicoes = o.ed ? [{nome:"", sym:o.sym||"", ed:o.ed, sobre:"", links:o.links||{}}] : [];
  }
});

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

/* Marcas de cada edição, escritas por extenso para que se entendam sem legenda */
const MARCAS = {
  "◆": {rotulo:"Traduzida do original", classe:"m-orig"},
  "◇": {rotulo:"Traduzida de outra língua", classe:"m-outra"},
  "✎": {rotulo:"Com notas ou introdução", classe:"m-notas"}
};
function marcasHTML(sym){
  if(!sym) return "";
  return [...sym].filter(c=>MARCAS[c]).map(c=>`<span class="etiq ${MARCAS[c].classe}">${esc(MARCAS[c].rotulo)}</span>`).join("");
}
