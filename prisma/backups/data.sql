SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict DYRjESHGNn1qFJ9eWZOJpaiAH42wffk6V5b758us30hjVwcQ6QsMxa1v5bSkEnr

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") FROM stdin;
\.


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at", "invite_token", "referrer", "oauth_client_state_id", "linking_target_id", "email_optional") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") FROM stdin;
\.


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") FROM stdin;
\.


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."instances" ("id", "uuid", "raw_base_config", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."oauth_clients" ("id", "client_secret_hash", "registration_type", "redirect_uris", "grant_types", "client_name", "client_uri", "logo_uri", "created_at", "updated_at", "deleted_at", "client_type", "token_endpoint_auth_method") FROM stdin;
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag", "oauth_client_id", "refresh_token_hmac_key", "refresh_token_counter", "scopes") FROM stdin;
\.


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") FROM stdin;
\.


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."mfa_factors" ("id", "user_id", "friendly_name", "factor_type", "status", "created_at", "updated_at", "secret", "phone", "last_challenged_at", "web_authn_credential", "web_authn_aaguid", "last_webauthn_challenge_data") FROM stdin;
\.


--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."mfa_challenges" ("id", "factor_id", "created_at", "verified_at", "ip_address", "otp_code", "web_authn_session_data") FROM stdin;
\.


--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."oauth_authorizations" ("id", "authorization_id", "client_id", "user_id", "redirect_uri", "scope", "state", "resource", "code_challenge", "code_challenge_method", "response_type", "status", "authorization_code", "created_at", "expires_at", "approved_at", "nonce") FROM stdin;
\.


--
-- Data for Name: oauth_client_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."oauth_client_states" ("id", "provider_type", "code_verifier", "created_at") FROM stdin;
\.


--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."oauth_consents" ("id", "user_id", "client_id", "scopes", "granted_at", "revoked_at") FROM stdin;
\.


--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."one_time_tokens" ("id", "user_id", "token_type", "token_hash", "relates_to", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") FROM stdin;
\.


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."sso_providers" ("id", "resource_id", "created_at", "updated_at", "disabled") FROM stdin;
\.


--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."saml_providers" ("id", "sso_provider_id", "entity_id", "metadata_xml", "metadata_url", "attribute_mapping", "created_at", "updated_at", "name_id_format") FROM stdin;
\.


--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."saml_relay_states" ("id", "sso_provider_id", "request_id", "for_email", "redirect_to", "created_at", "updated_at", "flow_state_id") FROM stdin;
\.


--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

COPY "auth"."sso_domains" ("id", "sso_provider_id", "domain", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "public"."User" ("id", "email", "firstName", "lastName", "profileImage", "connectedAccountId", "stripeConnectLinked") FROM stdin;
kp_e8cf3473a01c4a909017311af4c9adbb		Sam	Witwicky	https://avatars.githubusercontent.com/u/115424812?v=4	acct_1QEYegRmNovY8DFU	t
kp_17f35696ffd04d35a6c6d0bb56bf9a42	purabnath34@gmail.com	Purab	Nath	https://lh3.googleusercontent.com/a/ACg8ocIhanCRQ5pVc_vyNbt52END6c92CSvHDdLrwoWwUmPNh_UhUg=s96-c	acct_1QG2C7RjXMOTdmBB	f
kp_3a49827923a5441d8af0b1875abca204	soumyadipsanyal2017@gmail.com	SOUMYADIP	SANYAL	https://lh3.googleusercontent.com/a/ACg8ocLZTpwqlSeBB3lnrGs4V2Wwzob8Tv9kaEyX88rCRGhjEAKthXZl=s96-c	acct_1QEdbkD0kTgkwgwc	t
kp_7e20a10addc24815b5a66df0774940ac	1n1o1t1h1i1n1g@gmail.com	Nothing 1	Nothing 1	https://lh3.googleusercontent.com/a/ACg8ocJ_E9hMKPUsMGWtcCguS4iAAx80dJyQ56lF4bjobNY3bcQYzg=s96-c	acct_1Sn2AxD9jEgkiglw	t
kp_77c6c78b0b1d4ee3b5addab36d5732d3	vibegamer696@gmail.com	Nisha	paul	https://gravatar.com/avatar/19836392333db101966369a33750586a7c79a518247a9018a84060eb23ac7b1b?d=blank&size=200	acct_1Sn2B0DjzDMa2MT2	t
kp_16a7cce01a5843219c7342e0c65b6edf	ishikanath6@gmail.com	Ishika	Nath	https://lh3.googleusercontent.com/a/ACg8ocKTmgrX9MhKYrvtnLZQNY7RoGqU848Oa-ZQXE2JjrgMhXU2SDM=s96-c	acct_1Sn2wSDQHR5EbFWI	t
kp_fb0c137c334e4d92855c3f30b22c208c	athmajavijay95@gmail.com	athmaja	vijay	https://lh3.googleusercontent.com/a/ACg8ocLR-d6q0z8aSVMBrCBaD6pZuoLLqlQHXAXHGXTp0pS_MDHkkRLG=s96-c	acct_1SrJmCDga7GSxXkc	t
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "public"."Product" ("id", "name", "smallDescription", "description", "price", "currency", "images", "category", "productFile", "createdAt", "userId") FROM stdin;
7cd8276e-9380-4f67-9344-7e90c1f87be5	Symbion	Symbion is a minimalist and versatile icon pack designed for modern applications, featuring smooth lines and clean shapes that emphasize simplicity. Its icons are crafted to convey concepts intuitively, making it suitable for both professional and casual interfaces.	{"type": "doc", "content": [{"type": "paragraph", "content": [{"text": "Symbion Icon Kit: Where Design Meets Versatility", "type": "text", "marks": [{"type": "bold"}]}]}, {"type": "paragraph", "content": [{"text": "The ", "type": "text"}, {"text": "Symbion Icon Kit", "type": "text", "marks": [{"type": "bold"}]}, {"text": " is a meticulously crafted collection of icons designed to bring a balance of functionality and aesthetics to any project. Built with both digital interfaces and print media in mind, this comprehensive set boasts thousands of icons across diverse themes, each created to support a seamless user experience while adding a unique visual appeal.", "type": "text"}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Key Features:", "type": "text"}]}, {"type": "bulletList", "content": [{"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Extensive Library of Icons", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "The kit contains icons spanning essential categories, including technology, health, business, lifestyle, communication, and many more. Each icon is developed with an intuitive design language, making it easy for users to quickly interpret information.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Consistent, Scalable Vector Graphics", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "Every icon in the Symbion kit is vector-based, ensuring that each one is infinitely scalable without any loss of quality. From mobile interfaces to billboards, Symbion icons adapt beautifully to any screen size or resolution.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Two Style Variants: Line & Solid", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "To suit varying design needs, Symbion offers both line and solid styles. Use the clean, modern line icons for a minimalistic touch, or apply the bold, solid versions for a more impactful look.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Customizable and Layered for Flexibility", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "Each icon is easily customizable, with layered files available for fast edits. Adjust colors, line thickness, or combine icons for a personalized look that aligns with brand aesthetics.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Pixel-Perfect Design for Sharp Display", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "Meticulously crafted for clarity at all sizes, each icon is built with pixel-perfection, ensuring sharp and consistent display across all devices, from high-resolution screens to lower-resolution displays.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Cross-Platform Compatibility", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "Symbion icons are compatible with leading design software such as Adobe Illustrator, Sketch, Figma, and Adobe XD, allowing seamless integration into any design workflow.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Multiple Formats for Versatile Use", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "Available in SVG, PNG, EPS, and PDF formats, Symbion icons cater to all platforms and applications, making it simple to use across websites, mobile apps, presentations, and printed materials.", "type": "text"}]}]}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Perfect For:", "type": "text"}]}, {"type": "bulletList", "content": [{"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "App & Web Developers", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "Enhance user interfaces with a consistent, polished look that feels cohesive and professional.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Brand Designers", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "Create cohesive branding by using icons that add personality while supporting visual hierarchy and usability.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Marketing Teams", "type": "text", "marks": [{"type": "bold"}]}, {"type": "hardBreak"}, {"text": "Add clarity to campaigns, presentations, and documents, turning complex ideas into easy-to-digest visuals.", "type": "text"}]}]}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Design Language", "type": "text"}]}, {"type": "paragraph", "content": [{"text": "Symbion icons are crafted with a harmonious blend of modern aesthetics and timeless design principles. Rounded edges provide a friendly, approachable feel, while clean lines maintain a professional and sophisticated look.", "type": "text"}]}, {"type": "horizontalRule"}, {"type": "paragraph", "content": [{"text": "Symbion Icon Kit", "type": "text", "marks": [{"type": "bold"}]}, {"text": " is more than just a collection of icons; it's a versatile toolkit designed to bring elegance, clarity, and functionality to your projects. Whether you're working on an app interface, creating a marketing presentation, or designing a full-scale website, Symbion offers the perfect icons to enhance your visual storytelling.", "type": "text"}]}]}	50	€	{https://utfs.io/f/OFR8pjCnh2JE2LCGh28VfHDiKNw8TXalJmrA3dP5zEOpvj4M,https://utfs.io/f/OFR8pjCnh2JEm2pckYtyAo6Hgf3ElR1vTdwMI8aDzVxj9BO4,https://utfs.io/f/OFR8pjCnh2JEoVvYWBH4t3vyL6VIZTjEOkAzYPXed02qKumC}	icons	https://utfs.io/f/OFR8pjCnh2JEoGj4cEH4t3vyL6VIZTjEOkAzYPXed02qKumC	2024-10-27 16:22:51.993	kp_e8cf3473a01c4a909017311af4c9adbb
b436b7fd-24d1-403a-b9c6-d48476ecc546	Flexi Ui	Flexi UI is a modern, versatile UI kit designed to streamline the development of web and mobile applications. It offers a wide range of customizable components, from buttons and forms to complex navigation menus and card layouts, allowing developers to quickly build visually appealing, responsive interfaces.	{"type": "doc", "content": [{"type": "paragraph", "content": [{"text": "Flexi UI - A Comprehensive UI Kit for Versatile Design Needs", "type": "text", "marks": [{"type": "bold"}]}]}, {"type": "paragraph", "content": [{"text": "Flexi UI is a robust and versatile UI Kit designed to streamline the creation of modern, responsive, and visually appealing user interfaces. With a focus on flexibility and user-friendliness, this kit offers a vast collection of components, templates, and design elements that cater to a variety of digital products—whether for web, mobile, or desktop applications.", "type": "text"}]}, {"type": "paragraph", "content": [{"text": "Key Features:", "type": "text", "marks": [{"type": "bold"}]}]}, {"type": "orderedList", "attrs": {"start": 1}, "content": [{"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Wide Range of Components", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Flexi UI comes packed with an extensive set of UI elements, from basic buttons and form fields to more complex elements like charts, tables, and navigation bars. Each component is customizable, allowing designers to easily adapt them to fit specific branding or functional requirements.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Pre-designed Templates", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Save time with Flexi UI’s professionally designed templates, covering common layouts like dashboards, landing pages, login forms, and e-commerce pages. These templates are optimized for usability and aesthetics, making them a great starting point for any project.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Fully Responsive and Cross-Platform Ready", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Designed to work seamlessly across devices, Flexi UI components are responsive by default, ensuring consistency in appearance and functionality on any screen size—from smartphones to desktops.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Scalable and Customizable", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Built with scalability in mind, Flexi UI’s components are structured to be easily modified, with options for adjusting colors, typography, and spacing. The kit also includes support for dark and light themes, catering to various design preferences.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Modern Design Aesthetics", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": With a focus on clean, minimalist design, Flexi UI aligns with contemporary trends in UI/UX, giving digital products a sleek and polished look that enhances user experience.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Documentation and Support", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Flexi UI includes comprehensive documentation to guide users through setup, customization, and best practices. Whether you're a beginner or an experienced developer, the clear and detailed instructions make it easy to integrate and maximize the kit's potential.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Compatibility with Popular Frameworks", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Flexi UI is built to be compatible with popular frontend frameworks like React, Vue, and Angular, making it easier for developers to integrate into existing projects. It also supports Figma and Sketch for design collaboration, fostering seamless workflows between designers and developers.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Community and Regular Updates", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": As a continually evolving product, Flexi UI receives regular updates that introduce new components and templates, as well as improvements based on community feedback. This ensures that the UI kit stays current with design trends and technological advancements.", "type": "text"}]}]}]}, {"type": "paragraph", "content": [{"text": "Ideal Use Cases", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Flexi UI is ideal for designers and developers working on diverse projects such as SaaS platforms, e-commerce sites, personal portfolios, corporate websites, and mobile applications. Its adaptability and comprehensive nature make it a valuable resource for anyone aiming to deliver a refined and professional user experience.", "type": "text"}]}, {"type": "paragraph", "content": [{"text": "In summary, Flexi UI is an all-in-one solution for creating beautiful, functional, and responsive interfaces quickly and efficiently, with a flexible design system that adapts to various digital products and design needs.", "type": "text"}]}]}	200	PLN	{https://utfs.io/f/OFR8pjCnh2JEDVks2XT68pzkxRJYh3Fg4Nq7lKmiZfwTB5sQ,https://utfs.io/f/OFR8pjCnh2JEDnSsrHT68pzkxRJYh3Fg4Nq7lKmiZfwTB5sQ,https://utfs.io/f/OFR8pjCnh2JEY2Fqcbke9Uw7PK4NCvB8Y0stLHJ2dcpMzqW5}	Uikits	https://utfs.io/f/OFR8pjCnh2JEowdr8aH4t3vyL6VIZTjEOkAzYPXed02qKumC	2024-10-27 23:19:53.297	kp_e8cf3473a01c4a909017311af4c9adbb
2d9e711d-9a61-48a4-9fcc-cda09c867a5d	UI Verse	UI Verse is a user interface (UI) kit built on Bootstrap, designed to simplify the development of modern, responsive websites and applications. It provides a comprehensive set of pre-styled UI components, including buttons, forms, navigation bars, cards, and modals, all designed with a consistent aesthetic.	{"type": "doc", "content": [{"type": "paragraph", "content": [{"text": "\\"", "type": "text"}, {"text": "UI Verse", "type": "text", "marks": [{"type": "bold"}]}, {"text": "\\" is an advanced and meticulously crafted UI Kit designed to empower developers, designers, and businesses with a seamless experience in creating stunning, user-friendly, and highly responsive web interfaces using Bootstrap. Built to be versatile, modern, and modular, UI Verse combines the power of Bootstrap's grid system and components with unique, customizable design elements that cater to a wide range of industries, from e-commerce to SaaS platforms, blogs, and corporate websites.", "type": "text"}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Key Features", "type": "text"}]}, {"type": "orderedList", "attrs": {"start": 1}, "content": [{"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Bootstrap-Powered Core", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Leveraging Bootstrap's powerful grid system, layout utilities, and responsive design framework, UI Verse offers consistency, scalability, and compatibility with all major browsers and devices.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Extensive Component Library", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": The kit includes a vast library of reusable components such as buttons, cards, forms, modals, and more, each designed with a modern aesthetic and optimized for accessibility. Each component can be customized to fit the brand's look and feel, allowing for easy adaptations without sacrificing design consistency.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Pre-Built Page Templates", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": UI Verse comes with an array of pre-designed page templates for various use cases, including landing pages, product listings, pricing tables, blog layouts, and dashboards. These templates are structured to be clean, visually appealing, and easy to customize, reducing development time for common web pages.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Interactive Elements", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": From animated sliders and carousels to interactive tooltips and dropdowns, UI Verse provides engaging UI elements that enhance the user experience. These elements use smooth animations and transitions, keeping the design lively without compromising performance.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Dark and Light Themes", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Understanding the modern demand for both light and dark themes, UI Verse includes pre-set dark and light mode variations. Both modes are thoughtfully designed to maintain contrast, readability, and aesthetic harmony across components.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Typography and Iconography", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": UI Verse includes a range of typography styles and icon sets that align with current design trends. Fonts are carefully selected to ensure readability, and icons are vector-based, making them highly scalable and adaptable to various screen sizes and resolutions.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Advanced Forms and Tables", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": The UI Kit provides advanced form layouts and table designs for applications that require complex data handling, such as admin dashboards and e-commerce checkouts. The forms come with validation states and error messages, while the tables feature sorting, filtering, and pagination for an enhanced user experience.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Customization Flexibility", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Built with SCSS, UI Verse allows developers to modify the kit’s color palette, typography, spacing, and other design variables easily. This customization-friendly approach ensures that the UI Kit can be tailored to match the specific needs of any project.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Comprehensive Documentation and Support", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": UI Verse offers detailed documentation that guides users through each component and template, making it beginner-friendly while providing advanced usage tips for seasoned developers. Additionally, it comes with customer support to help resolve any technical issues or customization queries.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Cross-Browser Compatibility and Optimization", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Designed to work seamlessly across all major browsers (Chrome, Firefox, Safari, Edge), UI Verse is optimized for fast loading times and minimal bandwidth usage, ensuring a smooth experience for users on both mobile and desktop devices.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Built-In Accessibility", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Accessibility is a core aspect of UI Verse, with components and templates adhering to WCAG guidelines. This ensures that websites built with UI Verse are usable by people with disabilities, meeting industry standards for inclusivity.", "type": "text"}]}]}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Ideal Use Cases", "type": "text"}]}, {"type": "bulletList", "content": [{"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Startups and Small Businesses", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Quickly set up a professional and visually appealing website without needing extensive design and development resources.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Enterprise Applications", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Perfect for building complex applications with dynamic data, thanks to its advanced components and templates for dashboards and analytics.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "E-commerce Platforms", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Easily create engaging product listing pages, shopping carts, and checkout flows with a user-centric design.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Content-Heavy Websites", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Ideal for blogs, news sites, and educational platforms that prioritize readability and a structured layout.", "type": "text"}]}]}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Benefits of Using UI Verse", "type": "text"}]}, {"type": "paragraph", "content": [{"text": "UI Verse significantly reduces development time by offering ready-to-use, polished components while also providing the flexibility for extensive customization. With a consistent design language, responsive layout, and a wide range of components, it minimizes the need for custom CSS, ensuring a smooth development process and a cohesive user experience. Its Bootstrap foundation guarantees stability and compatibility, while the added features like dark mode, advanced animations, and accessibility options make it a future-ready choice for any modern web project.", "type": "text"}]}]}	40	€	{https://utfs.io/f/OFR8pjCnh2JEqczYHRpwfXl4oin2QkSAuKr9cm01FG5YtgWj,https://utfs.io/f/OFR8pjCnh2JEoK36J3H4t3vyL6VIZTjEOkAzYPXed02qKumC,https://utfs.io/f/OFR8pjCnh2JEndPoKAXTP6wbHpnh2o4uvrRxtImYQDcgGOkl}	Uikits	https://utfs.io/f/OFR8pjCnh2JERR9zoJfAiC1J6Q5O3PBeauD82vfF9d0MpyoT	2024-11-03 18:11:50.472	kp_e8cf3473a01c4a909017311af4c9adbb
14570b58-ff0e-4aaf-92f5-277ab111b074	Front-end Wave	Front-end Wave is a versatile template library built with Tailwind CSS and Laravel, designed to streamline front-end development for modern web applications. It offers a range of pre-designed templates, including dashboards, landing pages, e-commerce layouts, and user profiles, all optimized for responsiveness and customization.	{"type": "doc", "content": [{"type": "paragraph", "content": [{"text": "Front-end Wave", "type": "text", "marks": [{"type": "bold"}]}, {"text": " is a robust and flexible template library specifically designed for developers using Tailwind CSS and Laravel. This collection is crafted to streamline the front-end development process, offering an array of pre-designed templates and components that align with modern web standards. With a focus on efficiency, scalability, and adaptability, Front-end Wave helps developers build sophisticated web applications, websites, and user interfaces with minimal effort.", "type": "text"}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Key Features", "type": "text"}]}, {"type": "orderedList", "attrs": {"start": 1}, "content": [{"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Tailwind CSS Integration", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Built with Tailwind CSS, Front-end Wave utilizes utility-first classes to provide an extensive range of styling options without needing custom CSS. Tailwind's highly customizable framework allows for design consistency and fine-tuned control over each element, making it easy to adapt templates to fit any brand aesthetic.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Laravel-Powered Backend Support", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Designed with Laravel, one of the most popular PHP frameworks, Front-end Wave seamlessly integrates with Laravel's powerful features like Blade templating, route management, and built-in security tools. This pairing ensures that the templates are not only visually appealing but also capable of handling complex application logic, data flow, and back-end functionalities.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Modular and Reusable Components", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": The library includes a wide selection of reusable components such as buttons, cards, alerts, forms, modals, tables, and more. Each component is crafted with accessibility and responsiveness in mind, making them easy to incorporate into new or existing projects.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Pre-Built Page Templates", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Front-end Wave includes various pre-built templates covering essential pages, including homepages, dashboards, login screens, e-commerce product pages, checkout flows, and admin panels. These templates are designed with clean and responsive layouts to accommodate a wide range of industries and use cases.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Dark and Light Mode Support", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": For modern UI aesthetics, Front-end Wave provides ready-to-use dark and light mode themes. Users can toggle seamlessly between themes, as each component is designed to adapt visually and maintain readability in both modes.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Dynamic Forms and Data Handling", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": With advanced form structures and interactive data tables, Front-end Wave is ideal for creating data-heavy applications. Forms are designed with input validation, error handling, and real-time feedback, while tables support sorting, filtering, and pagination—features essential for dashboard-style applications.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Built-In Authentication Pages", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": The library includes pre-designed authentication templates (login, registration, password reset, etc.) that integrate smoothly with Laravel’s built-in authentication features. These templates come with all the necessary fields, validation states, and UI elements needed for a secure, user-friendly experience.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Interactive and Animated Elements", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": From sliders and carousels to interactive modals and dropdowns, Front-end Wave incorporates smooth animations and transitions powered by Tailwind CSS and Alpine.js. These animations enhance the user experience while keeping loading times low, ensuring smooth performance across devices.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Fully Responsive Design", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Every template and component in Front-end Wave is designed to be fully responsive, adapting seamlessly to all screen sizes and devices. The responsive design ensures that websites and applications look great and function well on desktop, tablet, and mobile screens.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Customizable Tailwind Configurations", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Leveraging Tailwind’s configuration flexibility, Front-end Wave allows developers to extend themes, adjust color palettes, set breakpoints, and more. This configuration setup makes it easy to create custom designs or quickly apply a brand’s unique style across all templates.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Comprehensive Documentation and Guides", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Front-end Wave comes with detailed documentation, covering installation steps, configuration options, and usage guidelines for each component and template. For developers new to Tailwind CSS or Laravel, the documentation includes step-by-step examples, making the kit accessible and user-friendly for all skill levels.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Cross-Browser Compatibility", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": All templates and components are thoroughly tested across major browsers, including Chrome, Firefox, Safari, and Edge, ensuring consistency and functionality no matter where users access your website or application.", "type": "text"}]}]}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Ideal Use Cases", "type": "text"}]}, {"type": "bulletList", "content": [{"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "SaaS Platforms and Web Applications", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Front-end Wave provides the building blocks for feature-rich SaaS applications, including templates for user dashboards, analytics, and admin panels.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "E-Commerce Solutions", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Ideal for developing visually appealing e-commerce websites with pre-built product pages, category listings, checkout flows, and cart management components.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Content-Heavy Websites", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": Suitable for news websites, blogs, and educational platforms that require structured layouts, readable typography, and easy navigation.", "type": "text"}]}]}, {"type": "listItem", "content": [{"type": "paragraph", "content": [{"text": "Corporate Websites and Portfolios", "type": "text", "marks": [{"type": "bold"}]}, {"text": ": With its modern design elements and customizable components, Front-end Wave is perfect for corporate landing pages, portfolio sites, and professional service websites.", "type": "text"}]}]}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Benefits of Using Front-end Wave", "type": "text"}]}, {"type": "paragraph", "content": [{"text": "Front-end Wave drastically reduces development time by providing a ready-to-use collection of templates that are both design-forward and code-efficient. Developers can focus on enhancing functionality and business logic, thanks to the modularity and reusable components built with Tailwind CSS and Laravel. With a strong emphasis on responsiveness, accessibility, and customization, Front-end Wave makes it easier than ever to create high-quality, scalable, and visually engaging web applications.", "type": "text"}]}, {"type": "heading", "attrs": {"level": 3}, "content": [{"text": "Why Choose Front-end Wave?", "type": "text"}]}, {"type": "paragraph", "content": [{"text": "By combining the power of Tailwind CSS and Laravel, Front-end Wave provides a developer-friendly environment that is versatile, modern, and highly efficient. Its ready-made templates and responsive components are crafted to ensure design consistency and performance across all devices. From startups to enterprise-level projects, Front-end Wave offers the reliability, scalability, and design freedom that today’s web applications demand.", "type": "text"}]}, {"type": "paragraph", "content": [{"text": "In essence, ", "type": "text"}, {"text": "Front-end Wave", "type": "text", "marks": [{"type": "bold"}]}, {"text": " is an all-in-one template library that empowers developers to build polished, professional, and high-performing web applications with ease.", "type": "text"}]}]}	100	€	{https://utfs.io/f/OFR8pjCnh2JEEV8JiwmPftR6mGL2UxrBisdOh3A9KC8vu4oc,https://utfs.io/f/OFR8pjCnh2JEFWimFYchcmASEaoz0KqlXYP2GMjWVNDhRdpL,https://utfs.io/f/OFR8pjCnh2JEvUnhARyr0T6Ovjmhe8YtV9IJsgPKkCUlpaou}	templates	https://utfs.io/f/OFR8pjCnh2JED1M8qIT68pzkxRJYh3Fg4Nq7lKmiZfwTB5sQ	2024-11-03 18:15:56.395	kp_e8cf3473a01c4a909017311af4c9adbb
6a73015c-1605-42dd-b12f-e7e72ee3d348	Athmaja Diary	dytafdgasjkdaslkjdksa	{"type": "doc", "content": [{"type": "paragraph", "content": [{"text": "igudsagdksajdkjashdksa", "type": "text"}]}]}	100	€	{https://utfs.io/f/OFR8pjCnh2JEJM9rjQ46WjmTgUhaLl5MBsqf7cSiOo2rw0eN}	Uikits	https://utfs.io/f/OFR8pjCnh2JEG1hozTrl1OBwsEhUYnTa9Iem8rxVS2WuCHoq	2026-01-19 14:53:49.254	kp_fb0c137c334e4d92855c3f30b22c208c
\.


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id", "type") FROM stdin;
\.


--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."buckets_analytics" ("name", "type", "format", "created_at", "updated_at", "id", "deleted_at") FROM stdin;
\.


--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."buckets_vectors" ("id", "type", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id", "user_metadata", "level") FROM stdin;
\.


--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."prefixes" ("bucket_id", "name", "created_at", "updated_at") FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."s3_multipart_uploads" ("id", "in_progress_size", "upload_signature", "bucket_id", "key", "version", "owner_id", "created_at", "user_metadata") FROM stdin;
\.


--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."s3_multipart_uploads_parts" ("id", "upload_id", "size", "part_number", "bucket_id", "key", "etag", "owner_id", "version", "created_at") FROM stdin;
\.


--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

COPY "storage"."vector_indexes" ("id", "name", "bucket_id", "data_type", "dimension", "distance_metric", "metadata_configuration", "created_at", "updated_at") FROM stdin;
\.


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

-- \unrestrict DYRjESHGNn1qFJ9eWZOJpaiAH42wffk6V5b758us30hjVwcQ6QsMxa1v5bSkEnr

RESET ALL;
