# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> P0-01 @smoke Homepage loads and search works
- Location: tests\smoke.spec.ts:22:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('textbox', { name: /search/i }).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('textbox', { name: /search/i }).first() with timeout 10000ms
  - waiting for getByRole('textbox', { name: /search/i }).first()

```

```yaml
- navigation "Shortcuts menu":
  - heading "Skip to" [level=2]
  - list "Skip to":
    - listitem:
      - link "main content":
        - /url: "#skippedLink"
        - text: Main content
  - heading "Keyboard shortcuts" [level=2]
  - list "Keyboard shortcuts":
    - listitem:
      - link "Search, alt, forward slash":
        - /url: javascript:void(0)
    - listitem:
      - link "Cart, shift, alt, c":
        - /url: javascript:void(0)
    - listitem:
      - link "Home, shift, alt, h":
        - /url: javascript:void(0)
    - listitem:
      - link "Your orders, shift, alt, o":
        - /url: javascript:void(0)
    - listitem:
      - button "Show/hide shortcuts, shift, alt, z"
  - text: To move between items, use your keyboard's up or down arrows.
- banner:
  - navigation "Primary":
    - link "Amazon.in":
      - /url: /ref=nav_logo
      - text: .in
    - button "Delivering to Mumbai 400017 Update location"
    - search:
      - text: All
      - combobox "Select the department you want to search in":
        - option "All Categories" [selected]
        - option "Alexa Skills"
        - option "Amazon Devices"
        - option "Amazon Fashion"
        - option "Amazon Pharmacy"
        - option "Appliances"
        - option "Apps & Games"
        - option "Audible Audiobooks"
        - option "Baby"
        - option "Beauty"
        - option "Books"
        - option "Car & Motorbike"
        - option "Clothing & Accessories"
        - option "Collectibles"
        - option "Computers & Accessories"
        - option "Deals"
        - option "Electronics"
        - option "Furniture"
        - option "Garden & Outdoors"
        - option "Gift Cards"
        - option "Grocery & Gourmet Foods"
        - option "Health & Personal Care"
        - option "Home & Kitchen"
        - option "Industrial & Scientific"
        - option "Jewellery"
        - option "Kindle Store"
        - option "Luggage & Bags"
        - option "Luxury Beauty"
        - option "Movies & TV Shows"
        - option "MP3 Music"
        - option "Music"
        - option "Musical Instruments"
        - option "Office Products"
        - option "Pet Supplies"
        - option "Prime Video"
        - option "Shoes & Handbags"
        - option "Software"
        - option "Sports, Fitness & Outdoors"
        - option "Subscribe & Save"
        - option "Tools & Home Improvement"
        - option "Toys & Games"
        - option "Under ₹500"
        - option "Video Games"
        - option "Watches"
      - searchbox "Search Amazon.in"
      - button "Go"
    - link "Choose a language for shopping in Amazon India. The current selection is English (EN).":
      - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
      - img "India"
      - text: EN
    - button "Expand to Change Language or Country"
    - link "Hello, sign in Account & Lists":
      - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
    - button "Expand Account and Lists"
    - link "Returns & Orders":
      - /url: /gp/css/order-history?ref_=nav_orders_first
    - link "0 items in cart":
      - /url: /gp/cart/view.html?ref_=nav_cart
    - button "Open All Categories Menu": All
    - list:
      - listitem:
        - link "Amazon Pay":
          - /url: /gp/sva/dashboard?ref_=nav_cs_apay
      - listitem:
        - link "Mobiles":
          - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
      - listitem:
        - link "Today's Deals":
          - /url: /deals?ref_=nav_cs_gb
      - listitem:
        - link "Coupons":
          - /url: /coupons?ref_=nav_cs_coupons
      - listitem:
        - link "Flights":
          - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
      - listitem:
        - link "Electronics":
          - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
      - listitem:
        - link "New Releases":
          - /url: /gp/new-releases/?ref_=nav_cs_newreleases
      - listitem:
        - link "Bestsellers":
          - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
      - listitem:
        - link "Fashion":
          - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
      - listitem:
        - link "Computers":
          - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
      - listitem:
        - link "Home & Kitchen":
          - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
      - listitem:
        - link "Pet Supplies":
          - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
      - listitem:
        - link "Sports, Fitness & Outdoors":
          - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
      - listitem:
        - link "Custom Products":
          - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
      - listitem:
        - link "Baby":
          - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
      - listitem:
        - link "Video Games":
          - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
      - listitem:
        - link "Books":
          - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
      - listitem:
        - link "Kindle eBooks":
          - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
      - listitem:
        - link "Grocery & Gourmet Foods":
          - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
      - listitem:
        - link "Toys & Games":
          - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
      - listitem:
        - link "Car & Motorbike":
          - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
      - listitem:
        - link "Customer Service":
          - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
      - listitem:
        - link "Home Improvement":
          - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
      - listitem:
        - link "Gift Cards":
          - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
      - listitem:
        - link "Beauty & Personal Care":
          - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
      - listitem:
        - link "Prime":
          - /url: /prime?ref_=nav_cs_primelink_nonmember
        - button "Prime Details"
      - listitem:
        - link "Audible":
          - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
      - listitem:
        - link "AmazonBasics":
          - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
      - listitem:
        - link "Subscribe & Save":
          - /url: /auto-deliveries/landing?ref_=nav_cs_sns
      - listitem:
        - link "Health, Household & Personal Care":
          - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
    - link "Jan26_Event":
      - /url: /events/greatindianfestival/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=913c2c21-782e-4de5-909f-10ab3b6494e9&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=B1PZ14Z435K2STP3BZMV
      - img "Jan26_Event"
- main:
  - list:
    - listitem:
      - link "Great deals Great prices Shop early deals now":
        - /url: /events/greatindianfestival/?_encoding=UTF8&_encoding=UTF8&ref_=jupwdedleo&pd_rd_w=LfFXJ&content-id=amzn1.sym.23100f27-601c-4365-83a4-fc1e0741d8be&pf_rd_p=23100f27-601c-4365-83a4-fc1e0741d8be&pf_rd_r=B1PZ14Z435K2STP3BZMV&pd_rd_wg=DFQay&pd_rd_r=5a38e849-63c6-4358-b1df-4011b71a3f43
        - heading "Great deals Great prices" [level=3]
        - img "Shop early deals now"
      - region "Video Player":
        - application
        - button "Pause"
    - listitem:
      - link "Text reads \"Mini LED 4K AI TV\", \"Answer to your thrilling moments\", \"30W powerful speakers\", \"SAMSUNG\", \"Shop Now\", \"Great Indian Festival! Reloaded\", \"ICICI Bank 10% Savings\", \"Amazon Pay Later 10% Cashback\", \"**T&C apply\". Samsung Mini LED 4K AI TV advertisement featuring family in festive yellow clothing watching holiday lights on screen with promotional festival banner and payment offers.":
        - /url: https://aax-eu-zaz.amazon.in/x/c/RNfd8DDn4rXvyklGVGLDOGwAAAGhbdQjKAoAAAH_AUFvbm9fdHhuX2JpZDEgICBvbm9fdHhuX2ltcDEgICCjmPMd/clv1c_ek-onYUy3dHCSxER0h4zoQ86TohBsFqvMghKpPUqQm4RKaZbN0xUnCnWOKwJA5JnmIkpNhzV0x_Vbggg3dxY1fnKHlmIje2LZzXhjJEQeZrBmjH7stqcBA-E3vLyaxYPVMMLFipacpntWyG8e4xMpJpVpdywsCttTmIXmWPzUL9-7fcVeUXrg6M2PZbQMkhwKu_JV8NkDX8C26WQNinzKwGpbSnJ2k8k7Whij-MgMjp8BfMB3XqoHYS_vvujNKC0acytUTUrNZ1IBJmxPiPVYszPm5Ti5IHovSdxaXH94FFqxIooFcDjYQaZ2hs84swf1Ua1VGALcNoGk-uCNBoXI7BsBZeJ1Tv1eJFe6FDBEfsBJyzGnav2ExYK5Sfg85eD4T8NYi1Y3AXlpejsK5r4bneIc_8ydOu_2CRnHq7RCtpL9-xhQmuwUu4HPd_zcGJXvamj78x4h2s9_YaA7Ks4NF2LzqjWVlJHtnxNSB5rP1oJzPIoOV3Z52ll8NH7bxerAI3ImK4sTdSf6pSvbnrhrOg_c0xjWfacYNmH3EWJ7ngBwHkCNs-VkBj1hkScP9XnWnBRBr_ux2lezhVTJ8Squ_T236iwYk6G0rQUuZQYw33EzZ5reBbPbRUHO8Oy_XSG-EtQNttu2EZD8ekKiLIJohfVQV5MI4XCWqkIOBm0rQ5-ecr9s-stTmyPw6F7JK9pfLpveQE/https://www.amazon.in/dp/B0GXV5313B?aref=TGjk9ABd4y&pd_rd_plhdr=t
        - heading [level=3]
        - img "Text reads \"Mini LED 4K AI TV\", \"Answer to your thrilling moments\", \"30W powerful speakers\", \"SAMSUNG\", \"Shop Now\", \"Great Indian Festival! Reloaded\", \"ICICI Bank 10% Savings\", \"Amazon Pay Later 10% Cashback\", \"**T&C apply\". Samsung Mini LED 4K AI TV advertisement featuring family in festive yellow clothing watching holiday lights on screen with promotional festival banner and payment offers."
      - button "Leave feedback on Sponsored ad": Sponsored
    - listitem:
      - link "Under ₹499 Deals on skincare Souled store Bewakoof Men *T&C apply":
        - /url: https://www.amazon.in/s/?_encoding=UTF8&i=beauty&rh=n%3A1355016031%2Cn%3A1374407031%2Cp_85%3A10440599031%2Cp_n_deal_type%3A26921224031&s=exact-aware-popularity-rank&dc=&ds=v1%3AAq2RpCqrbR0IeU8PXYNRWPa8xVqvF3qFWfQJzKGT7VA&qid=1779427260&rnid=1355016031&ref=sr_nr_n_6&pd_rd_w=gLFri&content-id=amzn1.sym.4c15e356-ac02-411a-89e9-ab873850fdbd&pf_rd_p=4c15e356-ac02-411a-89e9-ab873850fdbd&pf_rd_r=B1PZ14Z435K2STP3BZMV&pd_rd_wg=DFQay&pd_rd_r=5a38e849-63c6-4358-b1df-4011b71a3f43&ref_=pd_hp_d_r_atf_unk
        - heading "Under ₹499" [level=3]
        - text: Deals on skincare
        - img "Souled store Bewakoof"
        - img "Men"
        - text: "*T&C apply"
    - listitem:
      - link "Under ₹399 Kurta & kurta sets Kurta Kurta *T&C apply":
        - /url: https://www.amazon.in/s/?_encoding=UTF8&i=apparel&bbn=1968253031&rh=n%3A1968255031%2Cp_85%3A10440599031%2Cp_28%3AKurta%257CKurtis%257Ckurta%257Ckurtas%257Ckurti%257Ckurtis%257Clehenga%257Csalwar%2Cp_36%3A-40000&s=exact-aware-popularity-rank&hidden-keywords=-girl-B0D9DPYLZG-pant-trousers-shirt-tshirt&qid=1792505355&rnid=4595083031&ref=sr_nr_p_36_0_0&pd_rd_w=nv7QS&content-id=amzn1.sym.be65fb06-7432-48cc-9f7c-a163dce4e59a&pf_rd_p=be65fb06-7432-48cc-9f7c-a163dce4e59a&pf_rd_r=B1PZ14Z435K2STP3BZMV&pd_rd_wg=Em9yw&pd_rd_r=a9e4acbc-1c41-4429-b35e-641c38beac19&ref_=pd_hp_d_r_stg_unk
        - heading "Under ₹399" [level=3]
        - text: Kurta & kurta sets
        - img "Kurta"
        - img "Kurta"
        - text: "*T&C apply"
    - listitem:
      - link "Under ₹999 Portable BBQ grills for home & outdoors & more BBQ grills *T&C apply":
        - /url: /s/?_encoding=UTF8&i=lawngarden&srs=218495059031&rh=n%3A218495059031%2Cp_36%3A-82000&s=popularity-rank&pd_rd_w=M9o9p&content-id=amzn1.sym.a4162eb7-05e5-474d-9f77-765186d96913&pf_rd_p=a4162eb7-05e5-474d-9f77-765186d96913&pf_rd_r=B1PZ14Z435K2STP3BZMV&pd_rd_wg=DFQay&pd_rd_r=5a38e849-63c6-4358-b1df-4011b71a3f43&ref_=pd_hp_d_r_atf_unk
        - heading "Under ₹999" [level=3]
        - text: Portable BBQ grills for home & outdoors
        - img "& more"
        - img "BBQ grills"
        - text: "*T&C apply"
    - listitem:
      - link "Under ₹499 String lights Bathla & more Cotton bedsheets *T&C apply":
        - /url: https://www.amazon.in/s/?_encoding=UTF8&i=kitchen&bbn=222850916031&rh=n%3A976442031%2Cn%3A222850916031%2Cn%3A1380485031%2Cn%3A1380500031%2Cp_36%3A-49900&s=exact-aware-popularity-rank&dc=&qid=1792267779&rnid=3444809031&ref=sr_nr_p_36_0_0&pd_rd_w=jrzqx&content-id=amzn1.sym.94e8c4fd-20c8-43a4-b138-19274dbe84b9&pf_rd_p=94e8c4fd-20c8-43a4-b138-19274dbe84b9&pf_rd_r=B1PZ14Z435K2STP3BZMV&pd_rd_wg=DFQay&pd_rd_r=5a38e849-63c6-4358-b1df-4011b71a3f43&ref_=pd_hp_d_r_atf_unk
        - heading "Under ₹499 String lights" [level=3]
        - img "Bathla & more"
        - img "Cotton bedsheets"
        - text: "*T&C apply"
    - listitem:
      - link "Under ₹599 Nutty treasures *T&C apply Food & beverages":
        - /url: /s/?_encoding=UTF8&rh=n%3A4859481031%2Cp_36%3A-49999&dc=&qid=1789896561&rnid=2485523031&ref=sr_nr_p_36_0&pd_rd_w=ozj3l&content-id=amzn1.sym.40eb5a14-eaec-45d3-a590-5a223f7cfe6e&pf_rd_p=40eb5a14-eaec-45d3-a590-5a223f7cfe6e&pf_rd_r=B1PZ14Z435K2STP3BZMV&pd_rd_wg=DFQay&pd_rd_r=5a38e849-63c6-4358-b1df-4011b71a3f43&ref_=pd_hp_d_r_atf_unk
        - heading "Under ₹599 Nutty treasures" [level=3]
        - img "*T&C apply"
        - img "Food & beverages"
    - listitem:
      - link "Under ₹99 Fashion, home & more LowASP":
        - /url: /b/?_encoding=UTF8&node=222836655031&pd_rd_w=4p62p&content-id=amzn1.sym.567e3920-977b-430e-8094-3a17b3c67d5d&pf_rd_p=567e3920-977b-430e-8094-3a17b3c67d5d&pf_rd_r=B1PZ14Z435K2STP3BZMV&pd_rd_wg=DFQay&pd_rd_r=5a38e849-63c6-4358-b1df-4011b71a3f43&ref_=pd_hp_d_r_atf_unk
        - heading "Under ₹99" [level=3]
        - text: Fashion, home & more
        - img "LowASP"
    - listitem "Loading more"
  - link "Carousel next slide":
    - /url: "#"
- complementary "Your recently viewed items and featured recommendations":
  - table:
    - rowgroup:
      - row:
        - cell:
          - img
- button "Back to top"
- heading "Get to Know Us" [level=6]
- list:
  - listitem:
    - link "About Amazon":
      - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
  - listitem:
    - link "Careers":
      - /url: https://amazon.jobs
  - listitem:
    - link "Press Releases":
      - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
  - listitem:
    - link "Amazon Science":
      - /url: https://www.amazon.science
- heading "Connect with Us" [level=6]
- list:
  - listitem:
    - link "Facebook":
      - /url: https://www.facebook.com/AmazonIN
  - listitem:
    - link "Twitter":
      - /url: https://x.com/AmazonIN
  - listitem:
    - link "Instagram":
      - /url: https://www.instagram.com/amazondotin
- heading "Make Money with Us" [level=6]
- list:
  - listitem:
    - link "Sell on Amazon":
      - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
  - listitem:
    - link "Sell under Amazon Accelerator":
      - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
  - listitem:
    - link "Protect and Build Your Brand":
      - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
  - listitem:
    - link "Amazon Global Selling":
      - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
  - listitem:
    - link "Supply to Amazon":
      - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
  - listitem:
    - link "Become an Affiliate":
      - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
  - listitem:
    - link "Fulfilment by Amazon":
      - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
  - listitem:
    - link "Advertise Your Products":
      - /url: https://advertising.amazon.in/?ref=Amz.in
  - listitem:
    - link "Amazon Pay on Merchants":
      - /url: https://www.amazonpay.in/merchant
- heading "Let Us Help You" [level=6]
- list:
  - listitem:
    - link "Your Account":
      - /url: /gp/css/homepage.html?ref_=footer_ya
  - listitem:
    - link "Returns Centre":
      - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
  - listitem:
    - link "Recalls and Product Safety Alerts":
      - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
  - listitem:
    - link "100% Purchase Protection":
      - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
  - listitem:
    - link "Amazon App Download":
      - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
  - listitem:
    - link "Help":
      - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
- link "Amazon India Home":
  - /url: /ref=footer_logo
- link "Choose a language for shopping. Current selection is English.":
  - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
  - text: English
- button "Expand to Change Language or Country"
- button "Choose a country/region for shopping. The current selection is India.": India
- list:
  - listitem:
    - link "AbeBooks Books, art & collectibles":
      - /url: https://www.abebooks.com/
      - heading "AbeBooks" [level=5]
      - text: Books, art & collectibles
  - listitem:
    - link "Amazon Web Services Scalable Cloud Computing Services":
      - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
      - heading "Amazon Web Services" [level=5]
      - text: Scalable Cloud Computing Services
  - listitem:
    - link "Audible Download Audio Books":
      - /url: https://www.audible.in/
      - heading "Audible" [level=5]
      - text: Download Audio Books
  - listitem:
    - link "IMDb Movies, TV & Celebrities":
      - /url: https://www.imdb.com/
      - heading "IMDb" [level=5]
      - text: Movies, TV & Celebrities
- list:
  - listitem:
    - link "Shopbop Designer Fashion Brands":
      - /url: https://www.shopbop.com/
      - heading "Shopbop" [level=5]
      - text: Designer Fashion Brands
  - listitem:
    - link "Amazon Business Everything For Your Business":
      - /url: /business?ref=footer_aingw
      - heading "Amazon Business" [level=5]
      - text: Everything For Your Business
  - listitem:
    - link "Amazon Music Stream millions of songs":
      - /url: /music/player?ref=footer_apm
      - heading "Amazon Music" [level=5]
      - text: Stream millions of songs
- list:
  - listitem:
    - link "Conditions of Use & Sale":
      - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
  - listitem:
    - link "Privacy Notice":
      - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
  - listitem:
    - link "Interest-Based Ads":
      - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
- text: © 1996-2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | 
  2  | import { expect, Page } from '@playwright/test';
  3  | import { BasePage } from './base.page';
  4  | 
  5  | export class HomePage extends BasePage {
  6  |   constructor(page: Page) {
  7  |     super(page);
  8  |   }
  9  | 
  10 |   async verifyLoaded() {
  11 |     await expect(this.page.locator('#nav-logo-sprites')).toBeVisible();
  12 |     await expect(this.page.getByRole('textbox', {
  13 |       name: /search/i
> 14 |     }).first()).toBeVisible();
     |                 ^ Error: expect(locator).toBeVisible() failed
  15 |   }
  16 | 
  17 |   async search(term: string) {
  18 |     const search = this.page.getByRole('textbox', {
  19 |       name: /search/i
  20 |     }).first();
  21 | 
  22 |     await search.fill(term);
  23 |     await search.press('Enter');
  24 |     await this.page.waitForURL(/\/s\?/);
  25 |     await this.checkBlocked();
  26 |   }
  27 | }
  28 | 
```