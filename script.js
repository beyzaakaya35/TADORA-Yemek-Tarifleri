/* =========================
   TADORA - JAVASCRIPT
========================= */

/* BAŞLANGIÇ TARİFLERİ */

const defaultRecipes = [
    {
        id: 1,
        name: "Kremalı Mantarlı Makarna",
        category: "Ana Yemek",
        prep: 10,
        cook: 15,
        servings: 2,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1000&q=85",
        description: "Kremanın yumuşak dokusu, mantarın aroması ve parmesan peynirinin lezzetiyle hazırlanan pratik bir İtalyan makarnası.",
        ingredients: [
            "250 g penne veya fettuccine makarna",
            "200 g kültür mantarı",
            "200 ml sıvı krema",
            "2 diş sarımsak",
            "2 yemek kaşığı zeytinyağı",
            "1 yemek kaşığı tereyağı",
            "40 g rendelenmiş parmesan",
            "Tuz ve karabiber",
            "1 tutam taze maydanoz"
        ],
        steps: [
            "Geniş bir tencerede suyu kaynatın. Tuz ekleyip makarnayı paket üzerindeki süreye göre haşlayın. Sos için yarım çay bardağı makarna suyu ayırın.",
            "Mantarları nemli bir bezle temizleyip ince dilimleyin. Tavayı ısıtın, zeytinyağını ekleyin ve mantarları yüksek ateşte suyunu salıp çekene kadar soteleyin.",
            "Tereyağını ve ince doğranmış sarımsakları ekleyin. Sarımsakların kokusu çıkana kadar yaklaşık bir dakika pişirin.",
            "Kremayı tavaya dökün. Tuz ve karabiberle tatlandırıp kısık ateşte 3-4 dakika koyulaştırın.",
            "Haşlanmış makarnayı sosun içine alın. Gerektiğinde ayırdığınız makarna suyundan ekleyerek kıvamını ayarlayın.",
            "Parmesan peynirini ilave edip karıştırın. Üzerine taze maydanoz ekleyerek sıcak servis edin."
        ],
        tip: "Mantarları tavaya eklediğinizde sık sık karıştırmayın. Yüksek ateşte sotelemek, mantarların kızarmasını ve aromasını korumasını sağlar.",
        favorite: false
    },
    {
        id: 2,
        name: "Orman Meyveli Pancake",
        category: "Kahvaltı",
        prep: 10,
        cook: 10,
        servings: 3,
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1000&q=85",
        description: "Yumuşak ve puf puf dokulu pancake hamuru; taze çilek, yaban mersini ve bal ile tamamlanan keyifli bir kahvaltılık.",
        ingredients: [
            "1 su bardağı un",
            "1 su bardağı süt",
            "1 adet yumurta",
            "2 yemek kaşığı toz şeker",
            "1 tatlı kaşığı kabartma tozu",
            "1 paket vanilin",
            "1 yemek kaşığı eritilmiş tereyağı",
            "Bir tutam tuz",
            "Çilek ve yaban mersini",
            "Servis için bal"
        ],
        steps: [
            "Yumurta ve şekeri derin bir kapta şeker eriyene kadar çırpın.",
            "Sütü ve eritilmiş tereyağını ekleyerek karıştırın.",
            "Un, kabartma tozu, vanilin ve tuzu ayrı bir kapta harmanlayıp sıvı karışıma ilave edin.",
            "Hamuru fazla çırpmadan, pürüzsüzleşene kadar karıştırın. Beş dakika dinlendirin.",
            "Yapışmaz tavayı hafifçe yağlayıp orta-kısık ateşte ısıtın. Hamurdan küçük porsiyonlar dökün.",
            "Yüzeyde kabarcıklar oluştuğunda pancake'i çevirin ve diğer yüzünü de kızartın.",
            "Pancakeleri üst üste dizin. Çilek, yaban mersini ve bal ile servis edin."
        ],
        tip: "Hamuru fazla çırpmamak pancake'in yumuşak kalmasını sağlar. Tavayı çok yüksek ateşte kullanmayın; dışı erken kızarırken içi çiğ kalabilir.",
        favorite: false
    },
    {
        id: 3,
        name: "Akdeniz Salatası",
        category: "Salata",
        prep: 15,
        cook: 0,
        servings: 2,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&q=85",
        description: "Domates, salatalık, renkli biberler ve beyaz peynirin limonlu zeytinyağı sosuyla buluştuğu ferah bir salata.",
        ingredients: [
            "2 adet orta boy domates",
            "1 adet salatalık",
            "1 adet kırmızı biber",
            "Yarım kırmızı soğan",
            "80 g beyaz peynir",
            "6 adet siyah zeytin",
            "2 yemek kaşığı zeytinyağı",
            "Yarım limonun suyu",
            "1 çay kaşığı kekik",
            "Tuz ve karabiber"
        ],
        steps: [
            "Domatesleri iri küpler, salatalığı yarım ay şeklinde doğrayın.",
            "Kırmızı biberin çekirdeklerini çıkarıp ince şeritler halinde kesin.",
            "Kırmızı soğanı ince piyazlık doğrayın. Daha hafif bir tat için birkaç dakika soğuk suda bekletin.",
            "Bütün sebzeleri geniş bir salata kasesine alın.",
            "Zeytinyağı, limon suyu, kekik, tuz ve karabiberi küçük bir kapta karıştırın.",
            "Sosu salatanın üzerine gezdirin. Beyaz peyniri ve zeytinleri ekleyerek nazikçe karıştırın."
        ],
        tip: "Salatanın sulanmaması için sosu servis etmeden hemen önce ekleyin. Peynirin tuz oranına göre salatanın tuzunu ayarlayın.",
        favorite: false
    },
    {
        id: 4,
        name: "Çikolatalı Islak Kek",
        category: "Tatlı",
        prep: 15,
        cook: 35,
        servings: 8,
        image: "https://images.unsplash.com/photo-1540337706094-da10342c93d8?w=1000&q=85",
        description: "Yoğun kakao aroması ve çikolatalı sosuyla hazırlanan, iç dokusu nemli ve yumuşak ev yapımı kek.",
        ingredients: [
            "3 adet yumurta",
            "1 su bardağı toz şeker",
            "1 su bardağı süt",
            "Yarım su bardağı sıvı yağ",
            "2 su bardağı un",
            "3 yemek kaşığı kakao",
            "1 paket kabartma tozu",
            "1 paket vanilin",
            "1 su bardağı süt (sos için)",
            "2 yemek kaşığı kakao (sos için)",
            "3 yemek kaşığı şeker (sos için)"
        ],
        steps: [
            "Yumurta ve şekeri derin bir kapta açık renkli ve köpüklü bir kıvam alana kadar çırpın.",
            "Süt ve sıvı yağı ekleyip kısa süre karıştırın.",
            "Un, kakao, kabartma tozu ve vanilini eleyerek karışıma ilave edin.",
            "Karışımı yağlanmış orta boy fırın kabına dökün.",
            "Önceden ısıtılmış 180 derece fırında yaklaşık 30-35 dakika pişirin. Kürdan testiyle kontrol edin.",
            "Sos için süt, kakao ve şekeri küçük bir tencerede karıştırıp şeker eriyene kadar ısıtın.",
            "Fırından çıkan keki birkaç dakika dinlendirin. Dilimleyip ılık sosu üzerine gezdirin.",
            "Kekin sosu çekmesi için en az 20 dakika bekleyin."
        ],
        tip: "Keki fırından çıktıktan sonra birkaç dakika dinlendirin. Ilık sosu üzerine dökmek, kekin sosu dengeli şekilde çekmesini sağlar.",
        favorite: false
    },
    {
        id: 5,
        name: "Kremalı Domates Çorbası",
        category: "Çorba",
        prep: 10,
        cook: 25,
        servings: 4,
        image: "https://images.unsplash.com/photo-1608930532174-18ff53f01438?w=1000&q=85",
        description: "Olgun domateslerin aroması, tereyağı ve kremanın dengeli birleşimiyle hazırlanan pürüzsüz kıvamlı çorba.",
        ingredients: [
            "5 adet olgun domates",
            "1 adet kuru soğan",
            "2 diş sarımsak",
            "1 yemek kaşığı tereyağı",
            "1 yemek kaşığı zeytinyağı",
            "2 yemek kaşığı domates salçası",
            "3 su bardağı sıcak su veya sebze suyu",
            "100 ml krema",
            "Tuz ve karabiber",
            "Servis için kruton"
        ],
        steps: [
            "Soğanı küçük küpler halinde doğrayın. Sarımsakları ince ince kıyın.",
            "Tencerede tereyağı ve zeytinyağını ısıtıp soğanları yumuşayana kadar kavurun.",
            "Sarımsak ve domates salçasını ekleyerek kokusu çıkana kadar karıştırın.",
            "Kabukları soyulmuş ve doğranmış domatesleri tencereye ilave edin.",
            "Sıcak suyu ekleyip orta ateşte yaklaşık 20 dakika pişirin.",
            "Sebzeler yumuşadığında çorbayı blenderdan geçirerek pürüzsüz hale getirin.",
            "Kremayı ekleyip birkaç dakika daha ısıtın. Tuz ve karabiberle tatlandırın.",
            "Kruton ve isteğe göre taze fesleğenle servis edin."
        ],
        tip: "Domateslerin olgun ve aromatik olması çorbanın lezzetini artırır. Kremayı ekledikten sonra çorbayı uzun süre yüksek ateşte kaynatmayın.",
        favorite: false
    },
    {
        id: 6,
        name: "Avokadolu Poşe Yumurta",
        category: "Kahvaltı",
        prep: 10,
        cook: 5,
        servings: 2,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&q=85",
        description: "Kızarmış ekmek üzerinde limonla tatlandırılmış avokado püresi ve akışkan sarılı poşe yumurta.",
        ingredients: [
            "2 dilim ekmek",
            "1 adet olgun avokado",
            "2 adet yumurta",
            "1 yemek kaşığı limon suyu",
            "1 tatlı kaşığı zeytinyağı",
            "1 yemek kaşığı sirke",
            "Tuz ve karabiber",
            "Pul biber"
        ],
        steps: [
            "Avokadonun içini çıkarıp bir kasede çatalla ezin.",
            "Limon suyu, zeytinyağı, tuz ve karabiber ekleyerek karıştırın.",
            "Ekmek dilimlerini tavada veya tost makinesinde kızartın.",
            "Bir tencerede suyu hafif kaynama noktasına getirin. Sirkeyi ekleyin.",
            "Yumurtayı küçük bir kaseye kırın. Suda hafif bir girdap oluşturup yumurtayı dikkatlice bırakın.",
            "Yaklaşık 3 dakika pişirip kevgir yardımıyla sudan çıkarın.",
            "Avokado püresini kızarmış ekmeğe sürün. Poşe yumurtayı üzerine yerleştirip pul biberle servis edin."
        ],
        tip: "Poşe yumurta için suyun çok şiddetli kaynamaması önemlidir. Yumurtanın taze olması, akının dağılmasını azaltır.",
        favorite: false
    },
    {
        id: 7,
        name: "Fırında Baharatlı Tavuk",
        category: "Ana Yemek",
        prep: 15,
        cook: 45,
        servings: 4,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=1000&q=85",
        description: "Sarımsak, kekik ve kırmızı biberle marine edilen tavuk; fırında dışı kızarmış, içi sulu kalacak şekilde pişirilir.",
        ingredients: [
            "4 adet tavuk but",
            "3 yemek kaşığı zeytinyağı",
            "2 diş sarımsak",
            "1 tatlı kaşığı kırmızı toz biber",
            "1 çay kaşığı kekik",
            "1 çay kaşığı tatlı toz biber",
            "Yarım limonun suyu",
            "1 tatlı kaşığı tuz",
            "Yarım çay kaşığı karabiber",
            "2 adet patates"
        ],
        steps: [
            "Zeytinyağı, limon suyu, ezilmiş sarımsak ve baharatları bir kapta karıştırın.",
            "Tavukları hazırladığınız marinasyon sosuyla her tarafı kaplanacak şekilde harmanlayın.",
            "En az 30 dakika buzdolabında dinlendirin.",
            "Patatesleri elma dilim şeklinde kesin ve hafifçe tuzlayın.",
            "Tavukları ve patatesleri fırın tepsisine yerleştirin.",
            "Önceden ısıtılmış 200 derece fırında yaklaşık 40-45 dakika pişirin.",
            "Tavukların en kalın kısmının iç sıcaklığının en az 74 dereceye ulaştığını kontrol edin. Sıcak servis edin."
        ],
        tip: "Tavukları pişirmeden önce oda sıcaklığında kısa süre bekletmek daha dengeli pişmelerine yardımcı olur. Güvenli tüketim için iç sıcaklığını kontrol edin.",
        favorite: false
    },
    {
        id: 8,
        name: "Frambuazlı Cheesecake",
        category: "Tatlı",
        prep: 25,
        cook: 50,
        servings: 8,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=1000&q=85",
        description: "Kıtır bisküvi tabanı, kremsi peynir dolgusu ve frambuaz sosuyla hazırlanan dengeli bir cheesecake.",
        ingredients: [
            "200 g yulaflı veya sade bisküvi",
            "80 g eritilmiş tereyağı",
            "400 g krem peynir",
            "150 g toz şeker",
            "2 adet yumurta",
            "200 ml krema",
            "1 yemek kaşığı un",
            "1 paket vanilin",
            "150 g frambuaz",
            "2 yemek kaşığı şeker (sos için)",
            "1 tatlı kaşığı limon suyu"
        ],
        steps: [
            "Bisküvileri rondodan geçirip eritilmiş tereyağıyla karıştırın.",
            "Karışımı kelepçeli kalıbın tabanına bastırarak yayın. Buzdolabında 15 dakika bekletin.",
            "Krem peyniri ve şekeri pürüzsüz olana kadar çırpın.",
            "Yumurtaları teker teker ekleyin. Ardından krema, un ve vanilini ilave edin.",
            "Hazırladığınız dolguyu bisküvi tabanının üzerine dökün.",
            "Önceden ısıtılmış 160 derece fırında yaklaşık 45-50 dakika pişirin.",
            "Cheesecake'i fırında kapağı aralık şekilde 15 dakika dinlendirin. Ardından oda sıcaklığına getirin ve buzdolabında en az 4 saat soğutun.",
            "Frambuaz, şeker ve limon suyunu küçük bir tencerede birkaç dakika pişirerek sos hazırlayın. Soğuyan sosu cheesecake üzerine ekleyin."
        ],
        tip: "Dolgu malzemelerinin oda sıcaklığında olması pürüzsüz kıvam elde etmeyi kolaylaştırır. Cheesecake'i tamamen soğutmadan kalıptan çıkarmayın.",
        favorite: false
    },
    {
        id: 9,
        name: "Izgara Somon",
        category: "Ana Yemek",
        prep: 10,
        cook: 15,
        servings: 2,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1000&q=85",
        description: "Limon, sarımsak ve taze baharatlarla tatlandırılan somon fileto; dışı hafif kızarmış, içi yumuşak kalacak şekilde pişirilir.",
        ingredients: [
            "2 adet somon fileto",
            "1 yemek kaşığı zeytinyağı",
            "1 diş sarımsak",
            "Yarım limon",
            "1 çay kaşığı kekik",
            "Tuz ve karabiber",
            "Servis için dereotu",
            "Yanında servis etmek için haşlanmış sebze"
        ],
        steps: [
            "Somon filetoların yüzeyini kağıt havluyla kurulayın.",
            "Zeytinyağı, ezilmiş sarımsak, limon suyu, kekik, tuz ve karabiberi karıştırın.",
            "Somonları hazırlanan karışımla kaplayıp 10 dakika dinlendirin.",
            "Yapışmaz tavayı orta-yüksek ateşte ısıtın.",
            "Somonları önce derili tarafı aşağı gelecek şekilde tavaya yerleştirin.",
            "Her iki yüzünü kalınlığına göre yaklaşık 3-5 dakika pişirin.",
            "İç sıcaklığının güvenli seviyeye ulaştığını kontrol edin. Dereotu ve limon dilimleriyle servis edin."
        ],
        tip: "Somonu tavaya koyduktan sonra sürekli çevirmeyin. Derili tarafını önce pişirmek daha iyi bir yüzey elde etmenizi sağlar.",
        favorite: false
    }
];

// LOCAL STORAGE VERİLERİ: Tarifler tarayıcıda saklanır; sayfa yenilense de kaybolmaz.

function loadRecipes() {
    try {
        const data = localStorage.getItem("tadoraRecipes");

        // İlk açılışta başlangıç tariflerinin kopyasını kullan.
        if (data === null) {
            return defaultRecipes.map(recipe => ({ ...recipe }));
        }

        const parsed = JSON.parse(data);

        if (!Array.isArray(parsed)) {
            return defaultRecipes.map(recipe => ({ ...recipe }));
        }

        // Eski sürümlerde kullanılan başlangıç fotoğraflarını güncelle.
        // Yalnızca TADORA'nın eski varsayılan bağlantıları değiştirilir;
        // kullanıcının kendi eklediği fotoğraflara dokunulmaz.
        const oldStarterImages = {
            4: [
                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&q=85",
                "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1000&q=85"
            ],
            5: [
                "https://images.unsplash.com/photo-1547592180-85f173990554?w=1000&q=85",
                "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=1000&q=85"
            ]
        };

        return parsed
            .filter(recipe => recipe && typeof recipe === "object")
            .map((recipe, index) => {
                const starter = defaultRecipes.find(item => item.id === Number(recipe.id));
                const oldImageList = oldStarterImages[Number(recipe.id)] || [];
                const isOldStarterImage = oldImageList.includes(recipe.image);

                // Hazır tarifler, kayıtlı kullanıcı bilgileri korunarak birleştirilir.
                return {
                    ...(starter || {}),
                    ...recipe,
                    id: Number(recipe.id) || (Date.now() + index),
                    name: String(recipe.name || starter?.name || "Yeni tarif"),
                    category: String(recipe.category || starter?.category || "Ana Yemek"),
                    prep: Number.isFinite(Number(recipe.prep)) ? Number(recipe.prep) : (starter?.prep || 0),
                    cook: Number.isFinite(Number(recipe.cook)) ? Number(recipe.cook) : (starter?.cook || 0),
                    servings: Number.isFinite(Number(recipe.servings)) ? Number(recipe.servings) : (starter?.servings || 2),
                    image: (!recipe.image || isOldStarterImage)
                        ? (starter ? starter.image : getFallbackImage(recipe.category))
                        : recipe.image,
                    ingredients: Array.isArray(recipe.ingredients)
                        ? recipe.ingredients
                        : (starter?.ingredients || []),
                    steps: Array.isArray(recipe.steps)
                        ? recipe.steps
                        : (starter?.steps || []),
                    favorite: Boolean(recipe.favorite),
                    tip: Number(recipe.id) === 4 && recipe.tip === "Sosu kek sıcakken, sosu ise ılık halde dökmek daha dengeli bir doku sağlar. Kekin pişip pişmediğini kürdanla kontrol edin."
                        ? starter.tip
                        : String(recipe.tip || starter?.tip || "")
                };
            });
    } catch (error) {
        console.warn("Tarif kayıtları okunamadı; başlangıç tarifleri yüklendi.", error);
        return defaultRecipes.map(recipe => ({ ...recipe }));
    }
}

let recipes = loadRecipes();

let activeCategory = "Tümü";
let favoritesOnly = false;

// HTML ELEMENTLERİ

const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");

const formModal = document.getElementById("formModal");
const detailModal = document.getElementById("detailModal");

const recipeForm = document.getElementById("recipeForm");

// VERİLERİ KAYDETME

function saveRecipes() {
    try {
        localStorage.setItem("tadoraRecipes", JSON.stringify(recipes));
        return true;
    } catch (error) {
        console.error("Tarifler kaydedilemedi.", error);
        showToast("Tarifler tarayıcıya kaydedilemedi. Depolama alanını kontrol et.");
        return false;
    }
}

// HTML GÜVENLİ METİN

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];
    });
}

// GÖRSEL BAĞLANTISI KONTROLÜ

function getFallbackImage(category) {
    const fallbackImages = {
        "Ana Yemek": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900&q=80",
        "Kahvaltı": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=900&q=80",
        "Salata": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
        "Tatlı": "https://images.unsplash.com/photo-1540337706094-da10342c93d8?w=900&q=80",
        "Çorba": "https://images.unsplash.com/photo-1608930532174-18ff53f01438?w=900&q=80"
    };

    return fallbackImages[category] ||
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80";
}

function safeImage(url, category) {
    try {
        const parsed = new URL(url);

        if (["https:", "http:"].includes(parsed.protocol)) {
            return escapeHTML(parsed.href);
        }
    } catch (error) {
        // Bağlantı geçersizse tarifin kategorisine uygun fotoğraf kullanılır.
    }

    return getFallbackImage(category);
}

// Sabit sayfa görselleri yüklenemezse ikinci bir görsel denenir.

function addImageFallback(imageElement, fallbackUrl) {
    if (!imageElement) return;

    const useFallback = () => {
        if (imageElement.dataset.fallbackApplied === "true") return;

        imageElement.dataset.fallbackApplied = "true";
        imageElement.src = fallbackUrl;
    };

    imageElement.addEventListener("error", useFallback);

    // Script çalışmadan önce görsel hata verdiyse yine de yedek görseli uygula.
    if (imageElement.complete && imageElement.naturalWidth === 0) {
        useFallback();
    }
}

// Öne çıkan tarif alanı, tarif listesi değiştiğinde içerikle uyumlu kalır.

function updateSignature() {
    const signatureImage = document.getElementById("signatureImage");
    const signatureDescription = document.getElementById("signatureDescription");
    const signaturePrep = document.getElementById("signaturePrep");
    const signatureCook = document.getElementById("signatureCook");
    const signatureServings = document.getElementById("signatureServings");
    const signatureButton = document.getElementById("signatureButton");

    const featuredRecipe = recipes.find(recipe => Number(recipe.id) === 1) || recipes[0];

    if (!featuredRecipe) {
        signatureImage.onerror = null;
        signatureImage.src = getFallbackImage("Ana Yemek");
        signatureImage.alt = "Henüz tarif eklenmedi";

        signatureDescription.textContent = "Henüz tarif bulunmuyor. Kendi tarifini ekleyerek koleksiyonunu oluşturmaya başlayabilirsin.";

        signaturePrep.textContent = "—";
        signatureCook.textContent = "—";
        signatureServings.textContent = "—";

        signatureButton.disabled = true;
        signatureButton.setAttribute("aria-disabled", "true");

        return;
    }

    signatureImage.onerror = () => {
        signatureImage.onerror = null;
        signatureImage.src = getFallbackImage(featuredRecipe.category);
    };

    signatureImage.src = safeImage(featuredRecipe.image, featuredRecipe.category);
    signatureImage.alt = featuredRecipe.name;

    signatureDescription.textContent = featuredRecipe.description;
    signaturePrep.textContent = `${featuredRecipe.prep} dk`;
    signatureCook.textContent = `${featuredRecipe.cook} dk`;
    signatureServings.textContent = `${featuredRecipe.servings} kişi`;

    signatureButton.disabled = false;
    signatureButton.removeAttribute("aria-disabled");
}

// TARİF KARTLARINI OLUŞTURMA: Arama, kategori, favori ve sıralama sonuçları ekrana basılır.

function renderRecipes() {

    updateSignature();

    let filtered = [...recipes];

    // Kategori filtreleme
    if (activeCategory !== "Tümü") {
        filtered = filtered.filter(recipe =>
            recipe.category === activeCategory
        );
    }

    // Arama
    const search = searchInput.value.trim().toLocaleLowerCase("tr");

    if (search) {
        filtered = filtered.filter(recipe => {

            const searchableText = [
                recipe.name,
                recipe.category,
                recipe.description,
                ...(recipe.ingredients || [])
            ].join(" ").toLocaleLowerCase("tr");

            return searchableText.includes(search);
        });
    }

    // Favoriler
    if (favoritesOnly) {
        filtered = filtered.filter(recipe => recipe.favorite);
    }

    // Sıralama
    if (sortSelect.value === "name") {
        filtered.sort((a, b) =>
            a.name.localeCompare(b.name, "tr")
        );
    }

    if (sortSelect.value === "time") {
        filtered.sort((a, b) =>
            (Number(a.prep) + Number(a.cook)) - (Number(b.prep) + Number(b.cook))
        );
    }

    recipeGrid.innerHTML = "";

    if (filtered.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");

    filtered.forEach(recipe => {

        const card = document.createElement("article");

        card.className = "recipe-card";

        const totalTime = Number(recipe.prep) + Number(recipe.cook);

        card.innerHTML = `
            <div class="recipe-image-wrap">
                <img
                    class="recipe-image"
                    src="${safeImage(recipe.image, recipe.category)}"
                    alt="${escapeHTML(recipe.name)}"
                    loading="lazy"
                >

                <span class="recipe-category">
                    ${escapeHTML(recipe.category)}
                </span>

                <button
                    type="button"
                    class="favorite-button ${recipe.favorite ? "active" : ""}"
                    data-action="favorite"
                    data-id="${recipe.id}"
                    aria-label="${recipe.favorite ? "Favorilerden çıkar" : "Favorilere ekle"}"
                    aria-pressed="${Boolean(recipe.favorite)}"
                >
                    ${recipe.favorite ? "♥" : "♡"}
                </button>
            </div>

            <div class="recipe-card-body">

                <div class="recipe-meta">
                    <span>◷ ${totalTime} DK</span>
                    <span>♧ ${recipe.servings} KİŞİLİK</span>
                </div>

                <h3>${escapeHTML(recipe.name)}</h3>

                <p class="recipe-description">
                    ${escapeHTML(recipe.description)}
                </p>

                <div class="recipe-card-footer">
                    <span>${(recipe.ingredients || []).length} malzeme</span>

                    <button
                        type="button"
                        class="detail-button"
                        data-action="detail"
                        data-id="${recipe.id}"
                        aria-label="${escapeHTML(recipe.name)} tarifini incele"
                    >
                        Tarifi İncele ↗
                    </button>
                </div>

                <div class="admin-actions">
                    <button type="button" data-action="edit" data-id="${recipe.id}" aria-label="${escapeHTML(recipe.name)} tarifini düzenle">
                        Düzenle
                    </button>

                    <button type="button" data-action="delete" data-id="${recipe.id}" aria-label="${escapeHTML(recipe.name)} tarifini sil">
                        Sil
                    </button>
                </div>

            </div>
        `;

        const image = card.querySelector(".recipe-image");

        image.addEventListener("error", () => {
            image.onerror = null;
            image.src = getFallbackImage(recipe.category);
        }, { once: true });

        recipeGrid.appendChild(card);

    });

}

// TARİF DETAYI: Seçilen tarifin malzemeleri, adımları ve püf noktası modal pencerede gösterilir.

function showDetail(id) {

    const recipe = recipes.find(item => item.id === id);

    if (!recipe) return;

    const totalTime = Number(recipe.prep) + Number(recipe.cook);

    const detailContent = document.getElementById("detailContent");

    detailContent.innerHTML = `
        <img
            class="detail-image"
            src="${safeImage(recipe.image, recipe.category)}"
            alt="${escapeHTML(recipe.name)}"
        >

        <span class="detail-label">
            ${escapeHTML(recipe.category)} · TADORA RECIPE
        </span>

        <h2 class="detail-title">
            ${escapeHTML(recipe.name)}
        </h2>

        <p class="detail-description">
            ${escapeHTML(recipe.description)}
        </p>

        <div class="detail-info">
            <div>
                <span>HAZIRLIK</span>
                <strong>${recipe.prep} dakika</strong>
            </div>

            <div>
                <span>PİŞİRME</span>
                <strong>${recipe.cook} dakika</strong>
            </div>

            <div>
                <span>TOPLAM</span>
                <strong>${totalTime} dakika</strong>
            </div>

            <div>
                <span>PORSİYON</span>
                <strong>${recipe.servings} kişilik</strong>
            </div>
        </div>

        <div class="detail-columns">

            <div>
                <h3>Malzemeler</h3>

                <ul class="ingredient-list">
                    ${(recipe.ingredients || []).map(item => `
                        <li>${escapeHTML(item)}</li>
                    `).join("")}
                </ul>
            </div>

            <div>
                <h3>Hazırlanışı</h3>

                <ol class="steps-list">
                    ${(recipe.steps || []).map(item => `
                        <li>${escapeHTML(item)}</li>
                    `).join("")}
                </ol>
            </div>

        </div>

        ${recipe.tip ? `
            <div class="detail-tip">
                <h3>Püf Noktası</h3>
                <p>${escapeHTML(recipe.tip)}</p>
            </div>
        ` : ""}
    `;

    const image = detailContent.querySelector(".detail-image");

    image.addEventListener("error", () => {
        image.src = getFallbackImage(recipe.category);
        image.onerror = null;
    }, { once: true });

    detailModal.classList.add("show");

}

// TARİF EKLEME FORMU: Form temizlenir ve yeni tarif girişi için açılır.

function openForm() {

    recipeForm.reset();

    document.getElementById("recipeId").value = "";

    document.getElementById("formTitle").innerHTML =
        'Yeni tarif <em>oluştur.</em>';

    document.getElementById("submitText").textContent =
        "Tarifi Kaydet";

    formModal.classList.add("show");

}

// TARİF DÜZENLEME: Seçilen tarifin mevcut bilgileri forma aktarılır.

function editRecipe(id) {

    const recipe = recipes.find(item => item.id === id);

    if (!recipe) return;

    document.getElementById("recipeId").value = recipe.id;
    document.getElementById("recipeName").value = recipe.name;
    document.getElementById("recipeCategory").value = recipe.category;
    document.getElementById("recipeServings").value = recipe.servings;
    document.getElementById("recipePrep").value = recipe.prep;
    document.getElementById("recipeCook").value = recipe.cook;
    document.getElementById("recipeImage").value = recipe.image || "";
    document.getElementById("recipeDescription").value = recipe.description;

    document.getElementById("recipeIngredients").value =
        (Array.isArray(recipe.ingredients) ? recipe.ingredients : []).join("\n");

    document.getElementById("recipeSteps").value =
        (Array.isArray(recipe.steps) ? recipe.steps : []).join("\n");

    document.getElementById("recipeTip").value = recipe.tip || "";

    document.getElementById("formTitle").innerHTML =
        'Tarifi <em>düzenle.</em>';

    document.getElementById("submitText").textContent =
        "Değişiklikleri Kaydet";

    formModal.classList.add("show");

}

// TARİF SİLME: Kullanıcı onay verirse tarif listeden ve LocalStorage kaydından çıkarılır.

function deleteRecipe(id) {

    const confirmDelete = confirm("Bu tarifi silmek istediğine emin misin?");

    if (!confirmDelete) return;

    recipes = recipes.filter(recipe => recipe.id !== id);

    saveRecipes();
    renderRecipes();

    showToast("Tarif silindi.");

}

// FAVORİ İŞLEMİ: Kalp düğmesi tarifin favori durumunu değiştirir.

function toggleFavorite(id) {

    const recipe = recipes.find(item => item.id === id);

    if (!recipe) return;

    recipe.favorite = !recipe.favorite;

    saveRecipes();
    renderRecipes();

    showToast(
        recipe.favorite
            ? "Tarif favorilere eklendi."
            : "Tarif favorilerden çıkarıldı."
    );

}

// TARİF KAYDETME VE GÜNCELLEME: Form verileri doğrulanır; yeni kayıt oluşturulur veya mevcut kayıt güncellenir.

recipeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const id = document.getElementById("recipeId").value;

    const name = document.getElementById("recipeName").value.trim();
    const category = document.getElementById("recipeCategory").value;

    const servings = Number(document.getElementById("recipeServings").value);
    const prep = Number(document.getElementById("recipePrep").value);
    const cook = Number(document.getElementById("recipeCook").value);

    const image = document.getElementById("recipeImage").value.trim();

    const description = document.getElementById("recipeDescription").value.trim();

    const ingredients = document.getElementById("recipeIngredients").value
        .split("\n")
        .map(item => item.trim())
        .filter(Boolean);

    const steps = document.getElementById("recipeSteps").value
        .split("\n")
        .map(item => item.trim())
        .filter(Boolean);

    const tip = document.getElementById("recipeTip").value.trim();

    if (!name || !category || !description || !servings) {
        showToast("Lütfen zorunlu alanları doldur.");
        return;
    }

    if (
        !Number.isInteger(servings) || servings < 1 ||
        !Number.isInteger(prep) || prep < 0 ||
        !Number.isInteger(cook) || cook < 0 ||
        prep + cook < 1
    ) {
        showToast("Süre ve porsiyon bilgilerini kontrol et.");
        return;
    }

    if (ingredients.length === 0 || steps.length === 0) {
        showToast("Malzeme ve hazırlanış bilgilerini ekle.");
        return;
    }

    let validImage = "";

    if (image) {
        try {
            const parsed = new URL(image);

            if (!["https:", "http:"].includes(parsed.protocol)) {
                showToast("Geçerli bir görsel bağlantısı gir.");
                return;
            }

            validImage = parsed.href;

        } catch (error) {
            showToast("Görsel bağlantısı geçerli değil.");
            return;
        }
    }

    if (id) {

        // Mevcut tarifi güncelle.
        const index = recipes.findIndex(recipe => recipe.id === Number(id));

        if (index !== -1) {

            recipes[index] = {
                ...recipes[index],
                name,
                category,
                servings,
                prep,
                cook,
                image: validImage || recipes[index].image || getFallbackImage(category),
                description,
                ingredients,
                steps,
                tip
            };

            showToast("Tarif güncellendi.");
        }

    } else {

        // Yeni tarif oluştur.
        const newRecipe = {
            id: Math.max(Date.now(), ...recipes.map(recipe => Number(recipe.id) || 0)) + 1,
            name,
            category,
            servings,
            prep,
            cook,
            image: validImage || getFallbackImage(category),
            description,
            ingredients,
            steps,
            tip,
            favorite: false
        };

        recipes.unshift(newRecipe);

        showToast("Yeni tarif eklendi.");

    }

    saveRecipes();
    renderRecipes();

    formModal.classList.remove("show");

    recipeForm.reset();

});

// TARİF KARTI İŞLEMLERİ

recipeGrid.addEventListener("click", function(event) {

    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === "detail") {
        showDetail(id);
    }

    if (action === "favorite") {
        toggleFavorite(id);
    }

    if (action === "edit") {
        editRecipe(id);
    }

    if (action === "delete") {
        deleteRecipe(id);
    }

});

// ARAMA

searchInput.addEventListener("input", renderRecipes);

// SIRALAMA

sortSelect.addEventListener("change", renderRecipes);

// KATEGORİ FİLTRELERİ

document.querySelectorAll(".filter-button").forEach(button => {

    button.addEventListener("click", function() {

        document.querySelectorAll(".filter-button").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        document.querySelectorAll(".filter-button").forEach(item => {
            item.setAttribute("aria-pressed", String(item === this));
        });

        activeCategory = this.dataset.filter;
        favoritesOnly = false;

        const favoriteFilter = document.getElementById("favoriteFilter");

        favoriteFilter.classList.remove("active");
        favoriteFilter.setAttribute("aria-pressed", "false");

        renderRecipes();

    });

});

// KATEGORİ KARTLARI

document.querySelectorAll(".collection-card").forEach(button => {

    button.addEventListener("click", function() {

        activeCategory = this.dataset.category;
        favoritesOnly = false;

        document.querySelectorAll(".filter-button").forEach(item => {

            const isActive = item.dataset.filter === activeCategory;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));

        });

        const favoriteFilter = document.getElementById("favoriteFilter");

        favoriteFilter.classList.remove("active");
        favoriteFilter.setAttribute("aria-pressed", "false");

        document.getElementById("recipes").scrollIntoView({
            behavior: "smooth"
        });

        renderRecipes();

    });

});

// FAVORİ FİLTRESİ

document.getElementById("favoriteFilter").addEventListener("click", function() {

    favoritesOnly = !favoritesOnly;

    this.classList.toggle("active", favoritesOnly);
    this.setAttribute("aria-pressed", String(favoritesOnly));

    activeCategory = "Tümü";

    document.querySelectorAll(".filter-button").forEach(button => {

        const isActive = button.dataset.filter === "Tümü";

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));

    });

    renderRecipes();

});

// TEMA DEĞİŞTİRME

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {

    document.body.classList.toggle("light", theme === "light");

    themeToggle.textContent = theme === "light" ? "☾" : "☼";

    themeToggle.setAttribute(
        "aria-label",
        theme === "light" ? "Koyu temaya geç" : "Açık temaya geç"
    );

    try {
        localStorage.setItem("tadoraTheme", theme);
    } catch (error) {
        console.warn("Tema tercihi kaydedilemedi.", error);
    }

}

let savedTheme = "dark";

try {
    savedTheme = localStorage.getItem("tadoraTheme") === "light" ? "light" : "dark";
} catch (error) {
    console.warn("Kayıtlı tema okunamadı; koyu tema kullanılacak.", error);
}

setTheme(savedTheme);

themeToggle.addEventListener("click", function() {

    const newTheme = document.body.classList.contains("light")
        ? "dark"
        : "light";

    setTheme(newTheme);

});

// MODAL AÇMA VE KAPATMA: X, dış alan ve Escape tuşu ile pencereler kapanır.

function closeModal(modal) {
    modal.classList.remove("show");
}

document.getElementById("openAdd").addEventListener("click", openForm);

document.getElementById("bottomAdd").addEventListener("click", openForm);

document.getElementById("closeForm").addEventListener("click", function() {
    closeModal(formModal);
});

document.getElementById("closeDetail").addEventListener("click", function() {
    closeModal(detailModal);
});

[formModal, detailModal].forEach(modal => {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            closeModal(modal);
        }

    });

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal(formModal);
        closeModal(detailModal);
    }

});

// ÖNE ÇIKAN TARİF

document.getElementById("signatureButton").addEventListener("click", function() {

    const signatureRecipe = recipes.find(recipe => recipe.id === 1) || recipes[0];

    if (signatureRecipe) {
        showDetail(signatureRecipe.id);
    } else {
        showToast("Önce tarif koleksiyonuna bir tarif eklemelisin.");
    }

});

// MOBİL MENÜ

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function() {

    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Menüyü kapat" : "Menüyü aç"
    );

});

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", function() {

        nav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Menüyü aç");

    });

});

// BİLDİRİM

let toastTimer;

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);

}

// SAYFA İLK AÇILDIĞINDA: Sabit görsellere yedek bağlantılar tanımlanır.

addImageFallback(
    document.querySelector(".hero-image"),
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=2200&q=85"
);

addImageFallback(
    document.querySelector(".visual-banner-image"),
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=85"
);

document.querySelectorAll(".collection-card img").forEach(image => {

    addImageFallback(
        image,
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80"
    );

});

// İlk ekranda kayıtlı tarifler çizilir; öne çıkan alan da aynı veriden güncellenir.

renderRecipes();