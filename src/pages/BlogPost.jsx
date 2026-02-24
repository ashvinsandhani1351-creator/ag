import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Calendar, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from './Blog';

// Full content details for SEO simulation
const postContents = {
    'how-to-clean-black-spots': `
### Understanding Mold and Mildew on Tiles
Black spots on bathroom and kitchen tiles are typically caused by mold and mildew. These fungi thrive in warm, damp, and poorly ventilated environments. Not only do they ruin the aesthetic appeal of your beautiful ceramic or vitrified tiles, but they can also pose potential health risks.

### The Best Cleaning Solutions
For effective cleaning, you can rely on both commercial grouts cleaners or simple DIY home solutions:

1. **Baking Soda and Vinegar:** Create a thick paste of baking soda and water. Apply it to the black spots and let it sit for 10-15 minutes. Spray white vinegar over the paste and scrub with an old toothbrush.
2. **Hydrogen Peroxide:** A fantastic natural bleach. Spray 3% hydrogen peroxide directly onto the affected tiles. Let it sit for 30 minutes, then scrub thoroughly.
3. **Commercial Tile Cleaners:** For stubborn spots, use pH-neutral commercial tile cleaners specifically designed for deep grout cleaning.

### Prevention is Key
To prevent black spots from returning:
- Ensure proper ventilation in bathrooms and kitchens.
- Squeegee excess water off tiles after showers.
- Seal your grout lines annually.

Maintain the timeless beauty of your Morbi Tiles by following this simple cleaning routine.
  `,
    'bathroom-tile-colour-trends': `
### The Power of Neutrals in 2026
When it comes to bathroom renovations, establishing a serene, spa-like atmosphere is the ultimate goal for most homeowners. In 2026, we are seeing a massive shift towards warm, earthy neutrals, specifically blending grey and beige—often referred to as 'Greige'.

### Why Grey and Beige Work So Well
Grey brings a modern, sleek sophistication, while beige introduces warmth and coziness. Combining these two elements prevents a bathroom from feeling entirely sterile or overly rustic.

1. **Textured Grey Floors with Beige Walls:** Using large-format matte grey tiles on the floor anchors the room, while textured beige wall tiles reflect light and soften the environment.
2. **Accent Features:** Incorporate terrazzo patterns that naturally blend grey and beige stones into a harmonious surface.
3. **Lighting:** Neutrals react beautifully to both natural sunlight and warm LED lighting, altering the mood of the room throughout the day.

Explore Morbi Tiles' extensive collection of matte and glossy finishes to perfectly execute the latest interior design trends.
  `,
    'kitchen-tiles-vastu': `
### The Importance of Vastu in the Kitchen
In Vastu Shastra, the kitchen is considered the source of health, wealth, and energy for the entire household. It is traditionally ruled by the fire element (Agni). Choosing the right tile colours can harmonize this energy, creating a positive and active cooking environment.

### Best Tile Colours for the Kitchen
- **Earthy Browns and Terracotta:** Representing stability and warmth, earthy tones are incredibly auspicious for kitchen flooring. They ground the fiery energy.
- **Warm Yellows and Oranges:** Perfect for kitchen backsplashes, these colours stimulate appetite, joy, and positive communication among family members.
- **Soft Greens and Creams:** If your kitchen is located in the East or South-East, adding a touch of green or pastel cream on the walls can invite fresh, healing energy into the space.

### Colours to Avoid
Vastu experts generally recommend avoiding an all-black or predominantly dark grey kitchen, as excessive black can absorb positivity and create a lethargic atmosphere.

Refresh your kitchen's energy today with Vastu-compliant tile palettes from our premium Morbi Collections.
  `,
    'best-tiles-company-in-morbi': `
### The Ceramic Capital of India
When sourcing premium architectural surfaces, many developers and homeowners turn their eyes toward Morbi. Known globally, the **india ceramic tiles market** relies heavily on this manufacturing hub. The density of high-quality production facilities has earned it the title of *ceramic capital of India*. But with so many options, how do you find the **best tiles company in Morbi**?

### What to Look For in a Gujarat Tiles Factory
A reputable **gujarat tiles factory** goes beyond just manufacturing. Here are the key indicators of a top tier **morbi tiles showroom** and producer:
- **Quality Standards:** The best **tiles manufacturers in gujarat** adhere strictly to international ISO standards.
- **Product Range:** A top **tiles company in morbi** will offer a diverse catalog covering everything from standard 600x1200mm tiles to specialized 1200x1800 tiles.
- **Transparent Pricing:** Locating a **morbi tiles factory list with price** can be challenging, but transparent manufacturers provide clear quotes upfront. 

### Why Morbi Tiles?
We pride ourselves on being a premier **morbi ceramics** provider. Whether you need a massive **tile warehouse** for commercial bulk orders or a refined **morbi tiles shop** for a retail project, our infrastructure supports your needs. Contact our **tile dealers in morbi** today to discover how our **flooring tiles company** can elevate your next build.
  `,
    'morbi-vitrified-tiles-market': `
### Understanding Morbi Vitrified Tiles
The **morbi vitrified tiles** market is expanding rapidly, driven by technological advancements and shifting architectural trends. These exceptionally dense and durable tiles are the backbone of modern commercial and residential flooring.

### Deep Dive into Tile Types
The **india ceramic tiles market** offers impressive variety, with Morbi acting as the primary engine for innovation. 

1. **Full Body Tiles:** Finding an expert **full body tiles manufacturer in morbi** is crucial for high-traffic areas. Because the color and pattern run through the entire thickness of the tile, wear and tear are virtually invisible.
2. **Subway Tiles:** While often associated with western design, the production of high-quality **subway tiles** is a specialty of select **morbi tiles manufacturers**. They are perfect for kitchen backsplashes and bathroom accents.
3. **Parking and Mosaic Tiles:** For specialized applications, sourcing from a dedicated **12x12 parking tiles manufacturers in morbi** or a premium **mosaic tiles manufacturer in morbi** ensures you install products capable of withstanding heavy loads and exterior weathering.

### Expanding Your Sourcing
If you are investigating the **morbi marble market** or seeking a reliable **morbi tiles factory**, it's essential to partner with a **tiles company in morbi gujarat** that offers comprehensive quality control. Visit a leading **tiles showroom in morbi** to experience the finish and texture firsthand before committing your budget.
  `
};

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const content = postContents[id];

    return (
        <div className="bg-background min-h-screen pt-24 pb-20">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 md:px-8 mb-8">
                <div className="flex items-center text-sm text-gray-500 font-medium">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-primary truncate">{post.title}</span>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-accent font-medium mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                    <div className="h-64 md:h-96 w-full relative">
                        <div className="absolute top-4 left-4 z-20 bg-accent text-white text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-sm shadow-sm">
                            {post.category}
                        </div>
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-8 md:p-16">
                        <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6 border-b border-gray-100 pb-6">
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
                            <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-accent prose-p:text-gray-600 prose-p:font-light prose-li:text-gray-600 prose-li:font-light">
                            {/* Simple Markdown-like Renderer for Demo */}
                            {content.split('\n').map((paragraph, index) => {
                                const trimmed = paragraph.trim();
                                if (!trimmed) return null;

                                if (trimmed.startsWith('###')) {
                                    return <h3 key={index} className="text-2xl font-bold mt-10 mb-4">{trimmed.replace('### ', '')}</h3>;
                                } else if (trimmed.startsWith('-')) {
                                    return <ul key={index} className="list-disc pl-5 mb-2"><li className="mb-1">{trimmed.replace('- ', '')}</li></ul>;
                                } else if (trimmed.match(/^\d+\./)) {
                                    return <ol key={index} className="list-decimal pl-5 mb-2"><li className="mb-1">{trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li></ol>;
                                } else {
                                    // Bold text handling
                                    const boldHtml = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                                    return <p key={index} className="mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: boldHtml }}></p>;
                                }
                            })}
                        </div>

                        {/* Share & Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
                            <div className="flex space-x-2 mb-4 md:mb-0">
                                <span className="text-sm font-bold text-gray-700 mr-2 uppercase tracking-wide">Tags:</span>
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">Tiles</span>
                                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200">Home Improvement</span>
                            </div>
                            <Link to="/products" className="btn-primary">
                                Shop Our Collections
                            </Link>
                        </div>
                    </div>
                </motion.article>
            </div>
        </div>
    );
};

export default BlogPost;
