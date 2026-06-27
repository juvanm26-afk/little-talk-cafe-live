import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "View the Little Talk Cafe menu in Leigh-on-Sea, including breakfast, specials, sandwiches, salads, hot drinks, cold drinks and adult drinks."
};

type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

type MenuSection = {
  title: string;
  intro?: string;
  note?: string;
  items: MenuItem[];
};

const foodSections: MenuSection[] = [
  {
    title: "All Day Breakfast",
    intro: "Sausages, bacon and free-range eggs are sourced from a local butcher. Toast included with all day breakfast: brown, white or granary.",
    note: "Gluten-free bread +£1.00. Sourdough +£0.50.",
    items: [
      {
        name: "Early Starter",
        price: "£9.95",
        description: "Scrambled egg, grilled tomato, bacon, Heinz beans and hash brown."
      },
      {
        name: "Brunch",
        price: "£11.95",
        description: "Two fried eggs, two sausages, two rashers of bacon, grilled tomato and mushrooms."
      },
      {
        name: "Full English Breakfast",
        price: "£10.95",
        description: "Two rashers of bacon, Heinz beans, fried egg, sausage, mushrooms, hash brown and grilled tomato."
      },
      {
        name: "Omelette Breakfast",
        price: "£9.90",
        description: "A light cheese omelette served with Heinz beans, hash brown and grilled tomato."
      },
      {
        name: "Traditional Breakfast",
        price: "£10.90",
        description: "Two rashers of bacon, fried egg, sausage, Heinz beans and skinny fries."
      },
      {
        name: "Vegetarian Breakfast",
        price: "£9.95",
        description: "One egg, one vegetarian sausage, mushrooms, beans, tomatoes, hash brown and avocado."
      }
    ]
  },
  {
    title: "Sweet Breakfast",
    items: [
      {
        name: "Granola",
        price: "£4.80",
        description: "Honey, yogurt and jam."
      },
      {
        name: "American Pancakes",
        price: "£7.95",
        description: "Bacon or banana with Canadian maple syrup. Mixed berries and yogurt +£1.50."
      },
      {
        name: "49ers Pancakes",
        price: "£8.95",
        description: "Fried egg, bacon, American cheese, crispy onion and maple syrup."
      },
      {
        name: "Toasted Tea Cake",
        price: "£4.15",
        description: "Served with butter and marmalade or jam."
      },
      {
        name: "Cinnamon Waffles",
        price: "£7.95",
        description: "Mixed berries, banana or bacon."
      }
    ]
  },
  {
    title: "Eggs Specials",
    note: "Gluten-free bread +£1.00. Sourdough +£0.50.",
    items: [
      {
        name: "Eggs Benedict",
        price: "£10.95",
        description: "English muffin, crispy bacon, 2 poached eggs and hollandaise sauce."
      },
      {
        name: "Eggs Royale",
        price: "£11.45",
        description: "English muffin, smoked salmon, 2 poached eggs and hollandaise sauce."
      },
      {
        name: "Eggs Avocado",
        price: "£10.95",
        description: "English muffin, avocado, 2 poached eggs and hollandaise sauce."
      },
      {
        name: "Eggs Florentine",
        price: "£9.95",
        description: "English muffin, spinach, 2 poached eggs and hollandaise sauce."
      },
      {
        name: "Scrambled Eggs & Smoked Salmon on Toast",
        price: "£10.95"
      }
    ]
  },
  {
    title: "Chef Specials",
    note: "Extra sides are charged at £2.50 each.",
    items: [
      {
        name: "Grilled Steak",
        price: "£20.75",
        description: "300g sirloin steak, skinny fries and salad."
      },
      {
        name: "Steak Pie & Mash",
        price: "£13.95",
        description: "Served with gravy and peas."
      },
      {
        name: "Bangers & Mash",
        price: "£12.50",
        description: "3 fresh Cumberland sausages, creamy mashed potatoes, fried onion and onion gravy."
      },
      {
        name: "Freshly-Made Battered Cod and Chips",
        price: "£12.95",
        description: "With mushy or garden peas and tartar sauce."
      },
      {
        name: "BBQ Pork Loin Ribs",
        price: "£15.90",
        description: "Served with a choice of two sides."
      },
      {
        name: "Mussels",
        price: "£12.90",
        description: "With creamy white wine sauce, served with a choice of two sides."
      },
      {
        name: "Sides",
        price: "£2.50 each",
        description: "Skinny fries, sweet potato fries, chunky chips, herb diced potatoes, mixed salad, fried mushrooms or garlic bread."
      }
    ]
  },
  {
    title: "Jacket Potatoes",
    intro: "Large jacket potato served with freshly made mixed salad and crispy onion.",
    note: "Extra fillings £1.50.",
    items: [
      {
        name: "Cheese or Beans",
        price: "£7.95"
      },
      {
        name: "Tuna Mayo or Egg Mayo",
        price: "£8.25"
      },
      {
        name: "Prawn Cocktail or Chicken Mayo",
        price: "£8.90"
      }
    ]
  },
  {
    title: "Recommended",
    items: [
      {
        name: "The Mexican",
        price: "£13.95",
        description: "Sourdough bread, mozzarella cheese, guacamole, sun-dried tomatoes, streaky bacon, poached eggs and sriracha sauce."
      },
      {
        name: "Pulled Pork Eggs Benedict",
        price: "£12.85",
        description: "English muffin, pulled pork, poached eggs, hollandaise sauce and chilli flakes."
      },
      {
        name: "The Cowboy",
        price: "£15.90",
        description: "Sourdough bread, spinach, mushrooms, sirloin steak, poached eggs, French mustard and chilli powder."
      },
      {
        name: "The Talk",
        price: "£11.95",
        description: "Sourdough bread, soft cheese, avocado, bacon or salmon +£1.50, poached eggs, mixed seeds, goji berries and chilli powder."
      },
      {
        name: "The Special One",
        price: "£14.55",
        description: "English muffin, cream cheese, spinach, bacon, poached egg, grilled mushrooms, herb diced potatoes, hollandaise sauce, parmigiano cheese and chilli powder."
      }
    ]
  },
  {
    title: "Salads",
    items: [
      {
        name: "Chicken Caesar Salad",
        price: "£10.75",
        description: "Southern fried chicken, crispy bacon, cherry tomatoes and croutons."
      },
      {
        name: "Smoked Salmon Salad",
        price: "£11.75",
        description: "Mixed leaves, avocado, cucumber and salad dressing."
      },
      {
        name: "Little Talk Salad",
        price: "£10.95",
        description: "Baby gem lettuce, tomato, baby prawns and cocktail sauce."
      },
      {
        name: "Mediterranean Salad",
        price: "£11.95",
        description: "Mixed salad, cherry tomatoes, sundried tomatoes, onion, pancetta, halloumi and French dressing."
      }
    ]
  },
  {
    title: "Sandwiches",
    items: [
      {
        name: "Bacon",
        price: "£4.20"
      },
      {
        name: "Egg",
        price: "£3.25",
        description: "Fried or scrambled."
      },
      {
        name: "Egg & Bacon",
        price: "£5.25"
      },
      {
        name: "Sausage Sandwich",
        price: "£4.95"
      },
      {
        name: "Sausage & Egg",
        price: "£5.75"
      },
      {
        name: "Smoked Salmon",
        price: "£6.75",
        description: "With cream cheese."
      },
      {
        name: "Tuna Mayo or Chicken Mayo",
        price: "£5.45",
        description: "With lettuce and tomato."
      },
      {
        name: "BLT",
        price: "£4.90"
      },
      {
        name: "Antipasto",
        price: "£6.50",
        description: "Panini, ham, mozzarella and sundried tomatoes."
      },
      {
        name: "Prawn Cocktail",
        price: "£6.75"
      }
    ]
  },
  {
    title: "Panini or Ciabatta Toasties",
    note: "Any extra additions £2.25.",
    items: [
      {
        name: "Ham",
        price: "£4.75"
      },
      {
        name: "Cheese",
        price: "£4.75"
      },
      {
        name: "Ham & Cheese",
        price: "£6.20"
      },
      {
        name: "Tuna Mayo or Chicken Mayo",
        price: "£6.90"
      }
    ]
  },
  {
    title: "Sandwiches, Burgers & Hot Dogs",
    note: "Choice of skinny fries or sweet potato fries. Any extra additions £2.25.",
    items: [
      {
        name: "Battered Cod Loin Sandwich",
        price: "£9.50",
        description: "With tartare sauce and gem lettuce."
      },
      {
        name: "Cheesy Hot Dog",
        price: "£7.95",
        description: "Topped with cheddar cheese, American mustard, tomato sauce and crispy onion."
      },
      {
        name: "Steak Sandwich",
        price: "£14.95",
        description: "200g rump steak, fried egg, cheddar cheese, ham, lettuce, tomato and chipotle sauce."
      },
      {
        name: "Little Talk Burger",
        price: "£10.95",
        description: "6oz beef burger, bacon, fried egg, cheese, lettuce, tomato and chipotle sauce."
      },
      {
        name: "Chef's Signature Chicken Burger",
        price: "£11.95",
        description: "Southern fried chicken breast, chipotle sauce, rocket salad, tomato and coleslaw."
      },
      {
        name: "Vegetarian Burger",
        price: "£9.95",
        description: "Veggie burger, guacamole, bistro salad and grilled halloumi."
      }
    ]
  }
];

const drinkSections: MenuSection[] = [
  {
    title: "Hot Drinks",
    intro: "A large cup or pot of freshly made hot beverage comes with a complimentary biscuit. Decaf available.",
    items: [
      { name: "Espresso Single", price: "£1.75" },
      { name: "Espresso Double", price: "£2.50" },
      { name: "Macchiato", price: "£2.75" },
      { name: "Americano", price: "£2.90" },
      { name: "White Coffee", price: "£3.50" },
      { name: "Flat White", price: "£3.50" },
      { name: "Cappuccino", price: "£3.50" },
      { name: "Latte", price: "£3.50" },
      { name: "Hot Matcha", price: "£3.50" },
      { name: "Syrups", price: "+ £0.25", description: "Caramel, vanilla or gingerbread." },
      { name: "Alternative Milks", price: "+ £0.50", description: "Soya, almond, coconut or oat milk." },
      { name: "Chai Latte", price: "£4.30" },
      { name: "Mocha", price: "£3.90" },
      { name: "Hot Chocolate", price: "£4.00" },
      { name: "Pot of Tea", price: "£2.75", description: "English Breakfast, Chamomile, Earl Grey, Decaf English Breakfast, Green Tea or Peppermint Tea." }
    ]
  },
  {
    title: "Cold Drinks",
    items: [
      {
        name: "Chilled Soft Drinks",
        price: "£2.90",
        description: "Coke, Diet Coke, lemonade, tonic, light water, soda or Appletiser."
      },
      {
        name: "Juices",
        price: "£2.90",
        description: "Orange, apple, pineapple or mango."
      },
      {
        name: "Still or Sparkling Water",
        price: "£2.75"
      },
      {
        name: "Iced Matcha",
        price: "£3.50"
      },
      {
        name: "Iced Strawberry Matcha",
        price: "£3.95"
      }
    ]
  },
  {
    title: "Milkshakes & Smoothies",
    items: [
      {
        name: "Milkshakes",
        price: "£4.50 each",
        description: "Strawberry, banana or vanilla."
      },
      {
        name: "Tropical Twist",
        price: "£4.95",
        description: "Pineapple, mango and kiwi."
      },
      {
        name: "Berry Express",
        price: "£4.95",
        description: "Strawberries, blueberries and raspberries."
      },
      {
        name: "Hail Kale",
        price: "£4.95",
        description: "Kale, spinach and pineapple."
      },
      {
        name: "Veg Delight",
        price: "£4.95",
        description: "Carrot, mango, apple, banana and parsnip."
      },
      {
        name: "Protein Berry",
        price: "£5.95",
        description: "Strawberries, blueberries, banana, hemp seeds and pea protein."
      }
    ]
  }
];

const adultDrinkSections: MenuSection[] = [
  {
    title: "Beer & Cider",
    note: "Adult drinks are for eligible customers only.",
    items: [
      { name: "Moretti", price: "£3.90" },
      { name: "Corona", price: "£3.90" },
      { name: "Peroni", price: "£3.90" },
      { name: "San Miguel", price: "£3.90" },
      { name: "Peroni Alcohol-Free", price: "£3.50" },
      { name: "Old Mout Cider", price: "£4.50" }
    ]
  },
  {
    title: "Wine List",
    note: "Listed as bottle / 250ml / 175ml / 125ml where shown.",
    items: [
      { name: "Prosecco Brut", price: "£22 / £5.50", description: "75cl / 125ml." },
      { name: "Prosecco Rosé", price: "£22 / £5.50", description: "75cl / 125ml." },
      { name: "Pinot Grigio", price: "£17 / £5.50 / £4.25 / £3.40" },
      { name: "Sauvignon Blanc", price: "£18 / £6.00 / £4.50 / £3.60" },
      { name: "Merlot", price: "£17 / £5.50 / £4.25 / £3.40" },
      { name: "Malbec", price: "£22 / £7.30 / £5.50 / £4.40" },
      { name: "Rosé Wine", price: "£17 / £5.50 / £4.25 / £3.40" }
    ]
  },
  {
    title: "Port, Sherry & Aperitif",
    note: "50ml serves.",
    items: [
      { name: "Late Vintage / Croft Sherry / Martini Rosso", price: "£4.50" }
    ]
  },
  {
    title: "Liquors & Spirits",
    note: "Prices shown as 25ml / 50ml unless stated. Add any mixer for £1.50.",
    items: [
      { name: "Bombay Gin", price: "£3.50 / £5.50" },
      { name: "Hendricks Gin", price: "£4.25 / £6.50" },
      { name: "Russian Standard Vodka", price: "£3.00 / £5.25" },
      { name: "Bulleit Bourbon", price: "£3.50 / £5.75" },
      { name: "Jamesons", price: "£4.00 / £7.50" },
      { name: "Grants", price: "£3.00 / £5.50" },
      { name: "Jack Daniels", price: "£3.50 / £5.75" },
      { name: "Southern Comfort", price: "£3.00 / £5.50" },
      { name: "Bacardi Blanco", price: "£3.50 / £5.50" },
      { name: "Kraken Spiced", price: "£4.00 / £7.50" },
      { name: "Sierra Silver Tequila", price: "£4.00", description: "25ml." },
      { name: "Sierra Gold Tequila", price: "£4.00", description: "25ml." },
      { name: "Tequila Rose", price: "£3.50", description: "25ml." },
      { name: "Courvoisier", price: "£4.00 / £7.50" },
      { name: "Disaronno", price: "£5.50", description: "50ml." },
      { name: "Baileys", price: "£4.00", description: "50ml." },
      { name: "Tia Maria", price: "£4.50", description: "50ml." },
      { name: "Cointreau", price: "£4.50", description: "50ml." },
      { name: "Sambuca", price: "£5.50", description: "50ml." },
      { name: "Campari", price: "£3.50", description: "50ml." },
      { name: "Aperol", price: "£3.50", description: "50ml." }
    ]
  },
  {
    title: "Cocktails",
    note: "Adult drinks are for eligible customers only.",
    items: [
      { name: "Espresso Martini", price: "£8.00", description: "Vodka and coffee liquor." },
      { name: "Cosmopolitan", price: "£8.00", description: "Vodka, cranberry juice and Cointreau." },
      { name: "Mojito", price: "£8.00", description: "Rum, lime juice, mint and soda water." },
      { name: "Banana Colada", price: "£8.00", description: "Rum and pineapple juice." },
      { name: "Margarita", price: "£8.00", description: "Tequila, triple sec and lime juice." }
    ]
  }
];

const sectionLinks = [
  ...foodSections,
  ...drinkSections,
  ...adultDrinkSections
].map((section) => section.title);

function idFor(title: string) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <section className="realMenuSection noMenuImage" id={idFor(section.title)}>
      <div className="menuSectionContent">
        <div className="menuSectionHeading">
          <p className="eyebrow">Menu</p>
          <h2>{section.title}</h2>
          {section.intro && <p>{section.intro}</p>}
          {section.note && <p className="menuNote">{section.note}</p>}
        </div>

        <div className="menuItemList">
          {section.items.map((item) => (
            <article key={`${section.title}-${item.name}`} className="menuItem">
              <div>
                <h3>{item.name}</h3>
                {item.description && <p>{item.description}</p>}
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuGroup({
  eyebrow,
  title,
  text,
  sections
}: {
  eyebrow: string;
  title: string;
  text: string;
  sections: MenuSection[];
}) {
  return (
    <section className="menuGroup">
      <div className="menuGroupTitle">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="menuGroupIntro">{text}</p>
      </div>
      {sections.map((section) => (
        <MenuSectionBlock key={section.title} section={section} />
      ))}
    </section>
  );
}

export default function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Food & drinks"
        title="The Little Talk Cafe menu."
        text="Breakfast, lunch, café favourites, hot drinks, cold drinks and selected adult drinks in Leigh-on-Sea."
      >
        <div className="buttonRow">
          <Link className="button dark" href="/contact#reserve">Reserve a table</Link>
          <Link className="button gold" href="/venue-hire">Private events</Link>
        </div>
      </PageHero>

      <section className="menuIntroPanel">
        <div>
          <p className="eyebrow">Browse the menu</p>
          <h2>Breakfast, brunch, lunch and drinks, all in one place.</h2>
          <p>
            From proper breakfasts and café classics to fresh smoothies, hot drinks and selected adult drinks, there is something for every kind of visit. Please ask staff about allergens, dietary requirements and daily availability.
          </p>
        </div>
        <div className="menuIndexBox">
          <p className="eyebrow">Menu sections</p>
          <nav className="menuJumpLinks" aria-label="Jump to menu section">
            {sectionLinks.map((title) => (
              <a key={title} href={`#${idFor(title)}`}>
                {title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <MenuGroup
        eyebrow="Food"
        title="Breakfast, lunch & café favourites"
        text="Fresh breakfasts, café favourites, sandwiches, burgers, salads and chef specials."
        sections={foodSections}
      />

      <MenuGroup
        eyebrow="Drinks"
        title="Hot drinks, cold drinks & smoothies"
        text="Coffee, tea, soft drinks, juices, milkshakes and smoothies."
        sections={drinkSections}
      />

      <MenuGroup
        eyebrow="Adult drinks"
        title="Beer, wine, spirits & cocktails"
        text="A small selection of beer, wine, spirits and cocktails for eligible customers."
        sections={adultDrinkSections}
      />
    </main>
  );
}
