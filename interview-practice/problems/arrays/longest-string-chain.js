/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  if (!words || !words.length) return 0;

  words = words.sort((a, b) => a.length < b.length ? -1 : 1);

  let maxChainLength = 1;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPredecessor(words[i], words[j])) {
        const maybeMax = checkChain(words[j], words, 2);
        maxChainLength = Math.max(maxChainLength, maybeMax);
      }
    }
  }

  return maxChainLength;
};

function checkChain(str, arr, max) {
  let localMax = max;
  for (let i = 0; i < arr.length; i++) {
    if (isPredecessor(str, arr[i])) {
      const maybeMax = checkChain(arr[i], arr, max + 1);
      localMax = Math.max(localMax, maybeMax);
    }
  }
  return localMax;
}

function isPredecessor(pre, str) {
  if ((str.length - pre.length) !== 1) return false;

  let diff = 0;
  let j = 0;

  if (str[0] !== pre[0]) {
    j++;
    diff++;
  }

  for (let i = 0; i < pre.length; i++) {
    if (pre[i] !== str[j]) {
      if (diff > 0) return false;
      if (str[j + 1] !== pre[i]) return false;
      diff++;
      j++;
    }
    j++;
  }

  return true;
}

// console.log(`is predecessor: ${str}, ${arr[i]} - ${isPredecessor(str, arr[i])}`);
console.log('\n');
// console.log(longestStrChain([]));
console.log(longestStrChain(["a"]));
console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
console.log(longestStrChain(["ksqvsyq", "ks", "kss", "czvh", "zczpzvdhx", "zczpzvh", "zczpzvhx", "zcpzvh", "zczvh", "gr", "grukmj", "ksqvsq", "gruj", "kssq", "ksqsq", "grukkmj", "grukj", "zczpzfvdhx", "gru"]));
// console.log(longestStrChain(
//   [
//     "czgxmxrpx",
//     "lgh",
//     "bj",
//     "cheheex",
//     "jnzlxgh",
//     "nzlgh",
//     "ltxdoxc",
//     "bju",
//     "srxoatl",
//     "bbadhiju",
//     "cmpx",
//     "xi",
//     "ntxbzdr",
//     "cheheevx",
//     "bdju",
//     "sra",
//     "getqgxi",
//     "geqxi",
//     "hheex",
//     "ltxdc",
//     "nzlxgh",
//     "pjnzlxgh",
//     "e",
//     "bbadhju",
//     "cmxrpx",
//     "gh",
//     "pjnzlxghe",
//     "oqlt",
//     "x",
//     "sarxoatl",
//     "ee",
//     "bbadju",
//     "lxdc",
//     "geqgxi",
//     "oqltu",
//     "heex",
//     "oql",
//     "eex",
//     "bbdju",
//     "ntxubzdr",
//     "sroa",
//     "cxmxrpx",
//     "cmrpx",
//     "ltxdoc",
//     "g",
//     "cgxmxrpx",
//     "nlgh",
//     "sroat",
//     "sroatl",
//     "fcheheevx",
//     "gxi",
//     "gqxi",
//     "heheex"
//   ]));
console.log(longestStrChain(
  [
    "owstxul",
    "nba",
    "povjfxoxbaq",
    "sbyiewj",
    "cvaxpamwviffnlf",
    "hurvfq",
    "xbgvfmsvrorw",
    "zyyhofznugigk",
    "jdnfohb",
    "szcafkbnttmj",
    "faxvah",
    "kcvrngyustidz",
    "enizybmmlusau",
    "egaxc",
    "jfayxzvpaeh",
    "lklkfrkqaw",
    "rgbtenobrthfh",
    "cmmonv",
    "buldrivxkxbubt",
    "nbtyehq",
    "wwbqoc",
    "ofbq",
    "zthmhfkpvfyshf",
    "kktjoyqxsdpwu",
    "nbpr",
    "hkwdubrxuohagz",
    "ofxbq",
    "tguozjtzrugibs",
    "kcvrngystz",
    "iaflh",
    "zqyi",
    "jndtenfsohbia",
    "bdhemwcqwcb",
    "vhbyb",
    "rgrbtenobrthfh",
    "zenclhawjc",
    "fpzfurrhgyb",
    "kqmlpwwwdeuyj",
    "biyheapfalhpxs",
    "yoqcltwvq",
    "wwmrioktxp",
    "qlrxs",
    "povjfxoxbq",
    "vkxqxodtsrib",
    "xxmp",
    "bgychpbjdxhw",
    "nmspg",
    "wwzbqroxc",
    "vkxqtr",
    "fzkjva",
    "zyozuigk",
    "fgnvvsrclqp",
    "fpzfurhgyb",
    "bgychpbjdxhwr",
    "zuryb",
    "lcc",
    "uvrifrpcyvnrp",
    "rzaptyvv",
    "zgwyrliyofualqa",
    "szcrafkbnttmjh",
    "xzuvnei",
    "vrfpcyv",
    "odkablkghrqdmcm",
    "pqovjsfxoxbaqug",
    "praxaheqdlym",
    "zyofznugigk",
    "njlbtyexhwq",
    "eskishiqcra",
    "xuvei",
    "qtaeiw",
    "rgbtenorhfh",
    "vapmwvifnlf",
    "imggkob",
    "iheapflhxs",
    "zelncflhawjc",
    "vhbyjbvq",
    "kkmc",
    "praxahqdy",
    "mdfyxioesjjasdk",
    "bkchmmckonv",
    "bgychpbjdxjhwr",
    "dkhpklualh",
    "rzaptyvhuv",
    "vhbyjjbviq",
    "tguozjtzrugiubs",
    "wrivjh",
    "dkjhpklualh",
    "kduruogz",
    "kkjyqxsdpwu",
    "fgudksylu",
    "kvrngystz",
    "lpndxwikni",
    "gkbrxwhji",
    "bmeifqleh",
    "xzuyvnei",
    "imggob",
    "wwzbqoc",
    "qfwkdhixdxvahn",
    "oklkgrmcm",
    "zidlopquylimw",
    "zblccsppjfie",
    "kwdubrxuoagz",
    "jjtfzopgekbokixx",
    "qkxdxhn",
    "njlbztwyexxhwq",
    "sw",
    "jyzykstktznr",
    "rusmoswf",
    "jdfh",
    "ub",
    "ibomekyifqleh",
    "kduruog",
    "ewbpsyey",
    "edydt",
    "rsmoswf",
    "kqzmlpwwwdeuyj",
    "iheaflhxs",
    "jjtfzopgekbokxx",
    "vhyb",
    "kdxhn",
    "wwmiokxp",
    "jdfvpzit",
    "xedydt",
    "yeq",
    "rpv",
    "lvd",
    "buldvxxbt",
    "nmspyga",
    "chrpogyvk",
    "wwzbquroxc",
    "ydudfqmuo",
    "zeoavbkptiz",
    "hnvyceidd",
    "jyzykstznr",
    "fzkjyva",
    "lgxkdyaayi",
    "mxhhjdlla",
    "fvpzt",
    "aavrcutqvlfu",
    "hnyd",
    "olkjz",
    "xmetdydtq",
    "vhbyijjbviq",
    "wwmwrioktxp",
    "qtapeikw",
    "zyyhofeznugigk",
    "wjcizltpi",
    "kuruog",
    "zipqyli",
    "xswjyratwzub",
    "nsrusmoswf",
    "suntigywhrpmd",
    "zgkbdrxwbhjsi",
    "vrifrpcyvnrp",
    "etwt",
    "fzutmy",
    "mfyxiojsdk",
    "vovyrlakjpzc",
    "xzuyvonei",
    "suntiyhpmd",
    "jdnfoh",
    "dkhklualh",
    "zthmhfkpvyshf",
    "ofb",
    "njlbtyehwq",
    "ulismvkfs",
    "zelncflhawmjc",
    "zeoavbptz",
    "vuovyrlavkjpzc",
    "lwyygwgmifqwi",
    "qfkxdxvahn",
    "jyzykstzr",
    "orlkjz",
    "gurugs",
    "airztyccghpb",
    "zmhfksf",
    "vapmvfnlf",
    "buldivxkxbubt",
    "tlfa",
    "rv",
    "uzgkbdrzxwbhjsi",
    "buldvxxbubt",
    "yjdkfvpgzadita",
    "ydudafvqmupro",
    "rgbtorhfh",
    "jdenfsohba",
    "untiyhpmd",
    "orlakjz",
    "rzaptyvhuvp",
    "lvld",
    "xnmsjppygia",
    "hnvyceid",
    "kdx",
    "qfwkdhixdkxvahn",
    "vhbyjjbvq",
    "zencflhawjc",
    "wjcizyltkfpi",
    "jfaxzvaeh",
    "pr",
    "guztrugbs",
    "jdf",
    "biyheapfalhlpxs",
    "dfvpzt",
    "bomekifqleh",
    "lklkfrkqaanw",
    "xnmsjppygianbv",
    "uzgkbdrxwbhjsi",
    "nssrusqmoswf",
    "mfyxijsdk",
    "nybraprodr",
    "befqleh",
    "jdkfvpzita",
    "yjdkfevpgzadita",
    "ihkwdubrxuohagz",
    "alnmgu",
    "jfaxzvah",
    "guztzrugbs",
    "lpnwdxwikni",
    "fpzurhgyb",
    "cmmov",
    "mfyxiojjasdk",
    "mdfyxioejjasdk",
    "xnmsjppygianv",
    "gutrugbs",
    "kchmmkonv",
    "ziopquylim",
    "fvpt",
    "xpfufmzy",
    "praxaheqdym",
    "nrusmoswf",
    "jmxhhjdlla",
    "hy",
    "jkfmikmbtx",
    "sbyw",
    "fbvm",
    "lspnwdxwikni",
    "v",
    "cvaxpmwviffnlf",
    "qtapeiw",
    "fpzjfurrhgyb",
    "tfaflfar",
    "sxzclrafkbnttmjh",
    "kktjyqxsdpwu",
    "pfraxaheqdlymp",
    "ba",
    "awavrcutqpvelfu",
    "oefbvqm",
    "enizybmmlsau",
    "wq",
    "oefbvqmm",
    "fzkojyva",
    "kkgmcm",
    "vrifpcyv",
    "xbgvsvrrw",
    "kcvrngyusytidz",
    "ntyehq",
    "lccpp",
    "kdxh",
    "klkgmcm",
    "bkchjmmzckounv",
    "suntiywhpmd",
    "rfpcyv",
    "jdenfohb",
    "mfxijsdk",
    "xpfufmz",
    "ztmhfkpvshf",
    "tfaflfa",
    "oyrlakjz",
    "hnvyed",
    "untyhpm",
    "ruog",
    "nlbtyehwq",
    "pfufmz",
    "xnmsppyga",
    "vhy",
    "alnmwgu",
    "pzurhgyb",
    "hyd",
    "fszsutmy",
    "u",
    "buldvxkxbubt",
    "rfzkgojyva",
    "chsyrlpjoogyvkge",
    "iaflhs",
    "dfvpzit",
    "dkhklalh",
    "lspvnwdxwikni",
    "rcv",
    "hnvyced",
    "hkwdubrxuoagz",
    "cvapmwvifnlf",
    "xnmsjppyga",
    "vhbyjb",
    "k",
    "lqyuvmeofezuno",
    "wvcubd",
    "cub",
    "untyhpmd",
    "chrpjoogyvke",
    "eizbmmlsau",
    "atyv",
    "pqovjfxoxbaqg",
    "chrpjogyvk",
    "pofxxbq",
    "tyhpm",
    "xbgvmsvrrw",
    "lvled",
    "praxaheqdy",
    "u",
    "xxmwp",
    "povjfxxbq",
    "ziopqyli",
    "zfblccsppjfie",
    "uvrifrjpcfyvnrp",
    "ieaflhxs",
    "aiztycghp",
    "kcvrngyupsygtidz",
    "pqovjsfxoxbaqg",
    "jjtzopgekokxx",
    "taflfa",
    "w",
    "xnmspyga",
    "xnmsjppygiav",
    "fgudkwsylu",
    "jkfmikmbrtx",
    "wwzzbquhroxc",
    "zidlopquylim",
    "hnivyvcreidds",
    "rfzkojyva",
    "ydudfqmupo",
    "jgjazb",
    "lklkfrkqaaw",
    "lquvoezuo",
    "okjz",
    "lgxkdyuaayi",
    "xzuvei",
    "zidlopquylimwwu",
    "zeoavbkptz",
    "bpr",
    "odkalkgrqdmcm",
    "pofxbq",
    "rzaptyvuv",
    "jjazb",
    "v",
    "qfkxdxhn",
    "zmhfkvshf",
    "jdkfvpgzaita",
    "jdnfh",
    "vrifpcyvnp",
    "nybprod",
    "xmedydtq",
    "quvoeuo",
    "au",
    "ibomekyifqlseh",
    "bkchjmmckounv",
    "lqyuvmeofezuo",
    "suntiywhrpmd",
    "kz",
    "ztmhfkpvyshf",
    "aifrztyjccghpb",
    "mp",
    "tguozyjtzrugiubs",
    "lccsppf",
    "okalkgrmcm",
    "lgxkddyuaayi",
    "xxm",
    "zaptyv",
    "airztyjccghpb",
    "vkxqxotr",
    "awavrcutqvlfu",
    "zmhfks",
    "eq",
    "kcvrngyustiz",
    "qfkdxdxvahn",
    "uvrifrpcfyvnrp",
    "talfa",
    "oqwstxul",
    "zlioula",
    "bkchmmkonv",
    "zurhyb",
    "jgjazbk",
    "ruo",
    "jndenfsohba",
    "sbw",
    "zidlopquylimwu",
    "qfkdhxdxvahn",
    "lwygwgmifqwi",
    "vpt",
    "jfayxzvaeh",
    "lnmgu",
    "suntigywhzrpmd",
    "aptyv",
    "xpfufmzzy",
    "xxmswp",
    "qfkxdxvhn",
    "kcmmkonv",
    "xbgvmsvrorw",
    "blccsppfe",
    "nyhbvrafprodrf",
    "ok",
    "kfmikmbtx",
    "kxdxhn",
    "vrifpcyvnrp",
    "rv",
    "jndenfsohbia",
    "yhp",
    "ziqyli",
    "oefsbvqmmm",
    "rfcyv",
    "zgwyliyouala",
    "bdhmwcqwcb",
    "njlbtyexxhwq",
    "chrpjogyvke",
    "vh",
    "hnvyd",
    "aiztyccghpb",
    "ydudfqmupro",
    "lwyygwgmiflqwi",
    "njlbztyexxhwq",
    "rgbtnorhfh",
    "buldvxxbbt",
    "szcrafkbnttmj",
    "szcafkbnttm",
    "okz",
    "befqeh",
    "fgnvsrclqp",
    "kkmcm",
    "zaptyvv",
    "chrpgyvk",
    "zilopquylim",
    "hnivyvncreidds",
    "ayv",
    "aifrztyjcjcghpb",
    "eizybmmlsau",
    "hnvycreidds",
    "wwbq",
    "zyoznugigk",
    "smwf",
    "wwmriokxp",
    "qfkdhixdxvahn",
    "chrpgvk",
    "xswjuyratwzubb",
    "iaf",
    "rgbtenorthfh",
    "oqwstxaul",
    "ttfaflfar",
    "jyzyksttznr",
    "szcfkbnttm",
    "znclhawjc",
    "nybvraprodrf",
    "wrivj",
    "tyehq",
    "jdkfvpgzadita",
    "kqlpwwwdeuyj",
    "kwduruogz",
    "smw",
    "lnspvnwdxwikni",
    "gutrugs",
    "tyeq",
    "fzkjv",
    "hnvyceidds",
    "zgkbdrxwhji",
    "lquvmoezuo",
    "ehtwt",
    "bkchmmckounv",
    "tyhp",
    "okalkgrqdmcm",
    "rzplgw",
    "fgudkwsyblu",
    "sbyiw",
    "xswjuyratwzub",
    "szclrafkbnttmjh",
    "hnivycreidds",
    "jfaxvah",
    "ofbvqm",
    "smswf",
    "ydudfvqmupro",
    "jfayhxzvpaeh",
    "huorvfq",
    "sbyiew",
    "lquvmeoezuo",
    "bomeifqleh",
    "pzurhyb",
    "quvoezuo",
    "fgnvvsrcelqp",
    "ttfafalfar",
    "voyrlakjz",
    "quvoeo",
    "fguksylu",
    "egraxca",
    "wwzbqroc",
    "chrlpjoogyvke",
    "beifqleh",
    "vovyrlakjz",
    "vovyrlavkjpzc",
    "nybpr",
    "vrzplgwh",
    "mfyxioejjasdk",
    "zblccsppfie",
    "qlrdxs",
    "biheapfalhxs",
    "blccsppf",
    "zeoavbkpdtiz",
    "oefsbvqmm",
    "nlbtyehq",
    "blccsppfie",
    "egraxc",
    "biheapfalhpxs",
    "e",
    "bomekyifqleh",
    "oklkgmcm",
    "zgwyrliyofuala",
    "fzsutmy",
    "chrgvk",
    "mfyxiojasdk",
    "zgwyliouala",
    "zgkbdrxwbhji",
    "kcvrngyusygtidz",
    "vkxqxotsri",
    "qvoe",
    "qttfafalfar",
    "vrifpcyvn",
    "rvj",
    "kqzmnlpwwwdeuyj",
    "wwbqc",
    "wwq",
    "quvoe",
    "wwzbquhroxc",
    "rzaptzyvhuvp",
    "cmmkonv",
    "jkfmikmbrtax",
    "zmhfkshf",
    "ehtwtm",
    "jdenfsohb",
    "kkqxsdpwu",
    "pfraxaheqdlym",
    "jjab",
    "kwduruoagz",
    "ieaflhs",
    "cvapmwviffnlf",
    "awavrcutqvelfu",
    "lccp",
    "uruog",
    "povfxxbq",
    "ziopquyli",
    "vkxqxtr",
    "mpg",
    "kd",
    "xedydtq",
    "zgwyliyofuala",
    "wjcizltkfpi",
    "iafl",
    "chyrlpjoogyvkge",
    "chrgk",
    "eizbmmlsa",
    "jdkfvpzaita",
    "uwrivjh",
    "guzjtzrugbs",
    "kkqxspwu",
    "zqyli",
    "wjcizltkpi",
    "bgychpbjdxw",
    "fuksylu",
    "jdkfvpzit",
    "vkxqxotsr",
    "zyozugigk",
    "tguzjtzrugibs",
    "kktjoyqxsdpdwu",
    "llkfrkqaw",
    "kzj",
    "zyyofznugigk",
    "nybpro",
    "rsmswf",
    "chyrlpjoogyvke",
    "lvlped",
    "jja",
    "budvxxbt",
    "nybvrafprodrf",
    "povjfxoxbaqg",
    "aztycghp",
    "nybrprod",
    "lv",
    "nmspyg",
    "zyliouala",
    "wrvj",
    "kkyqxsdpwu",
    "vapmwvfnlf",
    "odkalkghrqdmcm",
    "zwyliouala",
    "hkqzmnlpwwwdeuyj",
    "vkxqxotsrib",
    "nybrprodr",
    "lccspp",
    "zylioula",
    "kwdubruoagz",
    "nybvraprodr",
    "nssrusmoswf",
    "ofbvm",
    "xwnmsjppygianbv",
    "aiztycghpb",
    "okalkgrqmcm",
    "vhbyjbv",
    "guzjtzrugibs",
    "gkbdrxwhji",
    "lquvmeofezuo",
    "ekishiqcra",
    "bdhmwcqwb",
    "chrk",
    "jkkfmikmbrtax",
    "utyhpm",
    "rfcv",
    "yooqcltwvq",
    "kcvrngyustz",
    "vkxqqxodtsrib",
    "ztmhfkvshf",
    "vovyrlakjpz",
    "gxmetdydtq",
    "lnshpvnwdxwikni",
    "fukylu",
    "pqovjsifxoxbaqug",
    "biheapflhxs",
    "nmpg",
    "vrzplgw",
    "jjtzopgekbokxx",
    "fpzjfurrhygyb"
  ]
));