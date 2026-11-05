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
  {t:"A República", a:"Platão (428–348 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega", sym:"◆ ✎",
   ed:"Edipro, 496 páginas. Tradução do grego por Edson Bini, com notas de rodapé.",
   img:"https://m.media-amazon.com/images/I/71p9NTtFrzL._SL1500_.jpg",
   sobre:{
     obra:"A República, também conhecida como Da Justiça, é uma das obras mais lidas e estudadas de Platão e um dos textos centrais da filosofia ocidental.\n\nO diálogo parte de uma pergunta simples e difícil: o que é a justiça? Sócrates e seus interlocutores examinam se ela consiste em dar a cada um o que lhe é devido, qual é a sua natureza e do que ela é feita, e se vale a pena ser justo mesmo quando a injustiça traria vantagens sem castigo.\n\nPara responder, Platão imagina uma cidade justa, organizada em classes, governada por filósofos, com guardiões que não possuem propriedade privada e uma educação voltada à formação do caráter. A ideia é que a justiça não seja apenas pensada, mas possa ser aplicada e realizada na vida política.",
     edicao:"Terceira edição da Edipro (2019), com 496 páginas. Traduzida do grego por Edson Bini, a partir do texto estabelecido por Hermann para a Teubner. Traz a numeração de Stephanus nas margens, uma cronologia da obra de Platão, dados biográficos e uma sinopse dos temas."
   },
   links:{simples:"https://www.amazon.com.br/dp/8552100746?tag=acidadela-20", kindle:"https://www.amazon.com.br/dp/B084RKRNPH?tag=acidadela-20"}},
  {t:"Apologia de Sócrates", a:"Platão (428–348 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega", sym:"",
   ed:"Edipro, 2019, edição de bolso. Tradução de Edson Bini. Origem da tradução e notas em conferência.",
   links:{bolso:"https://www.amazon.com.br/dp/8552100665?tag=acidadela-20"}},
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
OBRAS.forEach(o => { o.slug = slugObra(o.t); });

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
