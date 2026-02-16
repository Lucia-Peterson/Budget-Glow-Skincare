import React, { useState, useEffect } from 'react';
import { Droplet, Sun, Sparkles, Zap, Settings, Plus, Edit2, Trash2, ExternalLink, Check, X, Download, Save } from 'lucide-react';

export default function SkincareApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminMode, setAdminMode] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [skinType, setSkinType] = useState('');
  const [concerns, setConcerns] = useState([]);
  const [selectedStores, setSelectedStores] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50 });
  const [routine, setRoutine] = useState({
    cleanser: null,
    treatment: null,
    moisturizer: null,
    sunscreen: null
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);

  const stores = ['Amazon', 'Ulta', 'Sephora', 'Brand Direct'];
  const categories = ['cleanser', 'treatment', 'moisturizer', 'sunscreen'];
  
  const LAST_UPDATED = 'February 2026';

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    try {
      const stored = localStorage.getItem('skincare_products');
      if (stored) {
        setProducts(JSON.parse(stored));
      } else {
        const defaultProducts = getDefaultProducts();
        setProducts(defaultProducts);
        localStorage.setItem('skincare_products', JSON.stringify(defaultProducts));
      }
    } catch (error) {
      console.log('Initializing with default products');
      const defaultProducts = getDefaultProducts();
      setProducts(defaultProducts);
    }
    setLoading(false);
  };

  const getDefaultProducts = () => [
    // ... [Original product list remains here]
  ];

  const saveProducts = (updatedProducts) => {
    try {
      localStorage.setItem('skincare_products', JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error saving products:', error);
      alert('Failed to save products. Please try again.');
    }
  };

  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: `p${Date.now()}`,
    };
    const updatedProducts = [...products, newProduct];
    saveProducts(updatedProducts);
    setShowProductForm(false);
  };

  const updateProduct = (productData) => {
    const updatedProducts = products.map(p =>
      p.id === productData.id ? productData : p
    );
    saveProducts(updatedProducts);
    setEditingProduct(null);
  };

  const deleteProduct = (productId) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== productId);
      saveProducts(updatedProducts);
    }
  };

  // ... [Other logic functions like filterProducts, getRecommendedProducts, etc. remain here]

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center', background: '#0a0a0a', color: '#f5f5f5', minHeight: '100vh' }}>Loading...</div>;
  }

  // Header UI with the Admin Toggle button removed
  return (
    <div className="app">
      <style>{`
        /* Original styles remain intact */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .app { min-height: 100vh; background: #0a0a0a; font-family: 'Inter', sans-serif; color: #f5f5f5; padding: 20px; }
        .container { max-width: 1400px; margin: 0 auto; }
        header { display: flex; justify-content: space-between; align-items: center; padding: 40px 20px; border-bottom: 1px solid #2a2a2a; }
        .header-content h1 { font-family: 'Space Mono', monospace; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: #f5f5f5; margin-bottom: 8px; }
        .tagline { font-size: 0.95rem; color: #999; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; }
        /* Style for admin mode remains in case mode is toggled via code */
        .admin-controls { background: #111; padding: 20px; border-radius: 8px; margin-bottom: 30px; border: 1px solid #333; }
      `}</style>

      <div className="container">
        <header>
          <div className="header-content">
            <h1>BUDGET GLOW</h1>
            <p className="tagline">Personalized Skincare / {LAST_UPDATED}</p>
          </div>
          {/* THE ADMIN TOGGLE BUTTON WAS REMOVED FROM HERE */}
        </header>

        {adminMode && (
          <div className="admin-controls">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2>Product Management</h2>
              <button className="btn primary" onClick={() => setShowProductForm(true)}>
                <Plus size={18} /> Add Product
              </button>
            </div>
            {/* ... [Admin Form and management UI remains accessible via state] */}
          </div>
        )}

        {/* ... [Rest of the application: quiz steps and routine results remain the same] */}
      </import React, { useState, useEffect } from 'react';
import { Droplet, Sun, Sparkles, Zap, Settings, Plus, Edit2, Trash2, ExternalLink, Check, X, Download, Save } from 'lucide-react';

export default function SkincareApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminMode, setAdminMode] = useState(false);
  const [quizStep, setQuizStep] = useState(1); // NEW: Track quiz progress
  const [skinType, setSkinType] = useState('');
  const [concerns, setConcerns] = useState([]);
  const [selectedStores, setSelectedStores] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50 });
  const [routine, setRoutine] = useState({
    cleanser: null,
    treatment: null,
    moisturizer: null,
    sunscreen: null
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);

  const stores = ['Amazon', 'Ulta', 'Sephora', 'Brand Direct'];
  const categories = ['cleanser', 'treatment', 'moisturizer', 'sunscreen'];
  
  // UPDATE THIS DATE when you update product prices in Admin Mode
  const LAST_UPDATED = 'February 2026';

  // Initialize default products
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    try {
      const stored = localStorage.getItem('skincare_products');
      if (stored) {
        setProducts(JSON.parse(stored));
      } else {
        const defaultProducts = getDefaultProducts();
        setProducts(defaultProducts);
        localStorage.setItem('skincare_products', JSON.stringify(defaultProducts));
      }
    } catch (error) {
      console.log('Initializing with default products');
      const defaultProducts = getDefaultProducts();
      setProducts(defaultProducts);
    }
    setLoading(false);
  };

  const getDefaultProducts = () => [
    // ===== CLEANSERS (10) =====
    {
      id: 'c1',
      name: 'CeraVe Foaming Facial Cleanser',
      brand: 'CeraVe',
      price: 14.99,
      category: 'cleanser',
      size: '16 oz',
      bestFor: ['oily', 'combination', 'normal'],
      concerns: ['acne', 'oil-control'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/CeraVe-Foaming-Facial-Cleanser/dp/B003YMJJSK', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/foaming-facial-cleanser', available: true },
        { name: 'Brand Direct', url: 'https://www.cerave.com/skincare/cleansers/foaming-facial-cleanser', available: true }
      ],
      description: 'Foaming gel cleanser with ceramides and niacinamide'
    },
    {
      id: 'c2',
      name: 'CeraVe Hydrating Facial Cleanser',
      brand: 'CeraVe',
      price: 15.99,
      category: 'cleanser',
      size: '16 oz',
      bestFor: ['dry', 'normal'],
      concerns: ['hydration', 'barrier-repair'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/CeraVe-Hydrating-Facial-Cleanser/dp/B01MSSDEPK', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/hydrating-facial-cleanser', available: true },
        { name: 'Brand Direct', url: 'https://www.cerave.com/skincare/cleansers/hydrating-facial-cleanser', available: true }
      ],
      description: 'Non-foaming cream cleanser with hyaluronic acid'
    },
    {
      id: 'c3',
      name: 'PanOxyl Acne Foaming Wash 10% Benzoyl Peroxide',
      brand: 'PanOxyl',
      price: 9.99,
      category: 'cleanser',
      size: '5.5 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['acne', 'oil-control'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/PanOxyl-Acne-Foaming-Wash-Benzoyl/dp/B0030HCVXO', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/acne-foaming-wash-maximum-strength', available: true },
        { name: 'Brand Direct', url: 'https://www.panoxyl.com/products/acne-foaming-wash/', available: true }
      ],
      description: 'Maximum strength BP wash for stubborn acne'
    },
    {
      id: 'c4',
      name: 'Cetaphil Gentle Skin Cleanser',
      brand: 'Cetaphil',
      price: 14.99,
      category: 'cleanser',
      size: '16 oz',
      bestFor: ['all'],
      concerns: ['gentle', 'hydration'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Cetaphil-Gentle-Skin-Cleanser/dp/B001ET76EY', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/gentle-skin-cleanser', available: true },
        { name: 'Brand Direct', url: 'https://www.cetaphil.com/us/cleansers/gentle-skin-cleanser', available: true }
      ],
      description: 'Classic gentle cleanser for all skin types'
    },
    {
      id: 'c5',
      name: 'The Ordinary Squalane Cleanser',
      brand: 'The Ordinary',
      price: 8.00,
      category: 'cleanser',
      size: '1.7 oz',
      bestFor: ['dry', 'normal'],
      concerns: ['hydration', 'gentle'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/squalane-cleanser-P427406', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/squalane-cleanser', available: true },
        { name: 'Brand Direct', url: 'https://theordinary.com/en-us/squalane-cleanser-100418.html', available: true }
      ],
      description: 'Balm-to-oil cleanser that melts away makeup'
    },
    {
      id: 'c6',
      name: 'Good Molecules Gentle Exfoliating Cleanser',
      brand: 'Good Molecules',
      price: 6.00,
      category: 'cleanser',
      size: '4 oz',
      bestFor: ['all'],
      concerns: ['exfoliation', 'texture'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Good-Molecules-Gentle-Exfoliating-Cleanser/dp/B09EXAMPLE', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/gentle-exfoliating-cleanser', available: true },
        { name: 'Brand Direct', url: 'https://www.goodmolecules.com/products/gentle-exfoliating-cleanser', available: true }
      ],
      description: 'Daily cleanser with gentle AHA exfoliation'
    },
    {
      id: 'c7',
      name: 'Malezia 5% Urea Moisturizing Face Wash',
      brand: 'Malezia',
      price: 12.99,
      category: 'cleanser',
      size: '4 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['fungal-acne', 'hydration'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Malezia-Urea-Moisturizing-Face-Wash/dp/B0B7EXAMPLE', available: true },
        { name: 'Brand Direct', url: 'https://malezia.com/products/urea-moisturizing-face-wash', available: true }
      ],
      description: 'Fungal acne-safe cleanser with urea'
    },
    {
      id: 'c8',
      name: 'Prequel Skin Glycolic Acid Exfoliating Cleanser',
      brand: 'Prequel',
      price: 24.00,
      category: 'cleanser',
      size: '4 oz',
      bestFor: ['oily', 'combination', 'normal'],
      concerns: ['exfoliation', 'texture', 'anti-aging'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/prequel-glycolic-acid-cleanser-P12345', available: true },
        { name: 'Brand Direct', url: 'https://prequelskin.com/products/glycolic-acid-exfoliating-cleanser', available: true }
      ],
      description: 'Daily exfoliating cleanser with 8% glycolic acid'
    },
    {
      id: 'c9',
      name: 'Eucerin Advanced Cleansing Body and Face Cleanser',
      brand: 'Eucerin',
      price: 8.99,
      category: 'cleanser',
      size: '16.9 oz',
      bestFor: ['dry', 'normal'],
      concerns: ['gentle', 'hydration'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Eucerin-Advanced-Cleansing-Body-Face/dp/B003BMJGKE', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/advanced-cleansing-body-face-cleanser', available: true },
        { name: 'Brand Direct', url: 'https://www.eucerinus.com/products/body-care/advanced-cleansing', available: true }
      ],
      description: 'Soap-free gentle cleanser for face and body'
    },
    {
      id: 'c10',
      name: 'CeraVe Acne Foaming Cream Cleanser',
      brand: 'CeraVe',
      price: 9.99,
      category: 'cleanser',
      size: '5 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['acne', 'oil-control'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/CeraVe-Acne-Foaming-Cream-Cleanser/dp/B07RK4HST5', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/acne-foaming-cream-cleanser', available: true },
        { name: 'Brand Direct', url: 'https://www.cerave.com/skincare/cleansers/acne-foaming-cream-cleanser', available: true }
      ],
      description: '4% benzoyl peroxide cleanser with ceramides'
    },

    // ===== TREATMENTS (10) =====
    {
      id: 't1',
      name: 'Differin Adapalene Gel 0.1%',
      brand: 'Differin',
      price: 13.99,
      category: 'treatment',
      size: '0.5 oz',
      bestFor: ['oily', 'combination', 'normal'],
      concerns: ['acne', 'anti-aging', 'texture'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Differin-Adapalene-Gel-Acne-Treatment/dp/B019OIVU64', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/adapalene-gel-0-1-acne-treatment', available: true },
        { name: 'Brand Direct', url: 'https://www.differin.com/shop/differin-gel', available: true }
      ],
      description: 'OTC retinoid for acne and anti-aging'
    },
    {
      id: 't2',
      name: 'The Ordinary Niacinamide 10% + Zinc 1%',
      brand: 'The Ordinary',
      price: 6.00,
      category: 'treatment',
      size: '1 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['oil-control', 'pores', 'texture'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/niacinamide-10-zinc-1-P427417', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/niacinamide-10-zinc-1', available: true },
        { name: 'Brand Direct', url: 'https://theordinary.com/en-us/niacinamide-10-zinc-1-serum-100436.html', available: true }
      ],
      description: 'High-strength niacinamide for oil and pore control'
    },
    {
      id: 't3',
      name: 'The Ordinary Azelaic Acid Suspension 10%',
      brand: 'The Ordinary',
      price: 9.00,
      category: 'treatment',
      size: '1 oz',
      bestFor: ['all'],
      concerns: ['acne', 'redness', 'texture'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/azelaic-acid-suspension-10-P427407', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/azelaic-acid-suspension-10', available: true },
        { name: 'Brand Direct', url: 'https://theordinary.com/en-us/azelaic-acid-suspension-10-100435.html', available: true }
      ],
      description: 'Multi-functional for acne, redness, and texture'
    },
    {
      id: 't4',
      name: 'Good Molecules Niacinamide Brightening Toner',
      brand: 'Good Molecules',
      price: 6.00,
      category: 'treatment',
      size: '4 oz',
      bestFor: ['all'],
      concerns: ['brightening', 'texture', 'hydration'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Good-Molecules-Niacinamide-Brightening-Toner/dp/B084J7V6BY', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/niacinamide-brightening-toner', available: true },
        { name: 'Brand Direct', url: 'https://www.goodmolecules.com/products/niacinamide-brightening-toner', available: true }
      ],
      description: 'Niacinamide toner for brightness and even tone'
    },
    {
      id: 't5',
      name: 'The Ordinary Retinol 0.5% in Squalane',
      brand: 'The Ordinary',
      price: 6.00,
      category: 'treatment',
      size: '1 oz',
      bestFor: ['dry', 'normal', 'combination'],
      concerns: ['anti-aging', 'texture'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/retinol-0-5-in-squalane-P427419', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/retinol-0-5-in-squalane', available: true },
        { name: 'Brand Direct', url: 'https://theordinary.com/en-us/retinol-0-5-in-squalane-100439.html', available: true }
      ],
      description: 'Mid-strength retinol for anti-aging'
    },
    {
      id: 't6',
      name: 'Good Molecules Discoloration Correcting Serum',
      brand: 'Good Molecules',
      price: 12.00,
      category: 'treatment',
      size: '1 oz',
      bestFor: ['all'],
      concerns: ['dark-spots', 'brightening'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Good-Molecules-Discoloration-Correcting-Serum/dp/B08F53WMTD', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/discoloration-correcting-serum', available: true },
        { name: 'Brand Direct', url: 'https://www.goodmolecules.com/products/discoloration-correcting-serum', available: true }
      ],
      description: 'Tranexamic acid serum for dark spots'
    },
    {
      id: 't7',
      name: 'Malezia 10% Azelaic Acid Treatment',
      brand: 'Malezia',
      price: 19.99,
      category: 'treatment',
      size: '1 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['acne', 'redness', 'fungal-acne'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Malezia-Azelaic-Acid-Treatment/dp/B0BEXAMPLE', available: true },
        { name: 'Brand Direct', url: 'https://malezia.com/products/azelaic-acid-treatment', available: true }
      ],
      description: 'Fungal acne-safe azelaic acid treatment'
    },
    {
      id: 't8',
      name: 'Prequel Skin 10% Glycolic Acid Serum',
      brand: 'Prequel',
      price: 28.00,
      category: 'treatment',
      size: '1 oz',
      bestFor: ['oily', 'normal', 'combination'],
      concerns: ['exfoliation', 'texture', 'anti-aging'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/prequel-glycolic-acid-serum-P54321', available: true },
        { name: 'Brand Direct', url: 'https://prequelskin.com/products/glycolic-acid-serum', available: true }
      ],
      description: 'High-strength glycolic acid for texture refinement'
    },
    {
      id: 't9',
      name: 'The Ordinary Salicylic Acid 2% Solution',
      brand: 'The Ordinary',
      price: 6.00,
      category: 'treatment',
      size: '1 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['acne', 'pores', 'oil-control'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/salicylic-acid-2-solution-P427415', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/salicylic-acid-2-solution', available: true },
        { name: 'Brand Direct', url: 'https://theordinary.com/en-us/salicylic-acid-2-solution-100433.html', available: true }
      ],
      description: 'BHA toner for acne and congestion'
    },
    {
      id: 't10',
      name: 'CeraVe Resurfacing Retinol Serum',
      brand: 'CeraVe',
      price: 18.99,
      category: 'treatment',
      size: '1 oz',
      bestFor: ['all'],
      concerns: ['texture', 'anti-aging', 'acne'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/CeraVe-Resurfacing-Retinol-Serum/dp/B07TVL9QDG', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/resurfacing-retinol-serum', available: true },
        { name: 'Brand Direct', url: 'https://www.cerave.com/skincare/serums/resurfacing-retinol-serum', available: true }
      ],
      description: 'Encapsulated retinol with ceramides and niacinamide'
    },

    // ===== MOISTURIZERS (10) =====
    {
      id: 'm1',
      name: 'CeraVe Moisturizing Cream',
      brand: 'CeraVe',
      price: 19.99,
      category: 'moisturizer',
      size: '19 oz',
      bestFor: ['dry', 'normal'],
      concerns: ['hydration', 'barrier-repair'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/CeraVe-Moisturizing-Cream/dp/B00TTD9BRC', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/moisturizing-cream', available: true },
        { name: 'Brand Direct', url: 'https://www.cerave.com/skincare/moisturizers/moisturizing-cream', available: true }
      ],
      description: 'Rich cream with ceramides and MVE technology'
    },
    {
      id: 'm2',
      name: 'CeraVe PM Facial Moisturizing Lotion',
      brand: 'CeraVe',
      price: 16.99,
      category: 'moisturizer',
      size: '3 oz',
      bestFor: ['all'],
      concerns: ['anti-aging', 'barrier-repair'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/CeraVe-Facial-Moisturizing-Lotion-PM/dp/B00365DABC', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/pm-facial-moisturizing-lotion', available: true },
        { name: 'Brand Direct', url: 'https://www.cerave.com/skincare/moisturizers/pm-facial-moisturizing-lotion', available: true }
      ],
      description: 'Lightweight night moisturizer with niacinamide'
    },
    {
      id: 'm3',
      name: 'Cetaphil Moisturizing Lotion',
      brand: 'Cetaphil',
      price: 14.99,
      category: 'moisturizer',
      size: '16 oz',
      bestFor: ['all'],
      concerns: ['hydration', 'gentle'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Cetaphil-Moisturizing-Lotion/dp/B001ET76EY', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/moisturizing-lotion', available: true },
        { name: 'Brand Direct', url: 'https://www.cetaphil.com/us/moisturizers/moisturizing-lotion', available: true }
      ],
      description: 'Lightweight daily moisturizer for all skin types'
    },
    {
      id: 'm4',
      name: 'The Ordinary Natural Moisturizing Factors + HA',
      brand: 'The Ordinary',
      price: 8.00,
      category: 'moisturizer',
      size: '1 oz',
      bestFor: ['all'],
      concerns: ['hydration', 'barrier-repair'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/natural-moisturizing-factors-ha-P427419', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/natural-moisturizing-factors-ha', available: true },
        { name: 'Brand Direct', url: 'https://theordinary.com/en-us/natural-moisturizing-factors-ha-100419.html', available: true }
      ],
      description: 'Surface hydration with hyaluronic acid'
    },
    {
      id: 'm5',
      name: 'Malezia Moisturizer',
      brand: 'Malezia',
      price: 19.99,
      category: 'moisturizer',
      size: '4 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['fungal-acne', 'hydration'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Malezia-Moisturizer/dp/B0B1EXAMPLE', available: true },
        { name: 'Brand Direct', url: 'https://malezia.com/products/moisturizer', available: true }
      ],
      description: 'Fungal acne-safe gel moisturizer'
    },
    {
      id: 'm6',
      name: 'Good Molecules Niacinamide Moisturizer',
      brand: 'Good Molecules',
      price: 8.00,
      category: 'moisturizer',
      size: '1.7 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['hydration', 'oil-control'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Good-Molecules-Niacinamide-Moisturizer/dp/B08EXAMPLE', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/niacinamide-moisturizer', available: true },
        { name: 'Brand Direct', url: 'https://www.goodmolecules.com/products/niacinamide-moisturizer', available: true }
      ],
      description: 'Lightweight gel-cream with niacinamide'
    },
    {
      id: 'm7',
      name: 'Eucerin Advanced Repair Cream',
      brand: 'Eucerin',
      price: 16.99,
      category: 'moisturizer',
      size: '16 oz',
      bestFor: ['dry'],
      concerns: ['hydration', 'barrier-repair'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Eucerin-Advanced-Repair-Cream/dp/B003BMJGKE', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/advanced-repair-cream', available: true },
        { name: 'Brand Direct', url: 'https://www.eucerinus.com/products/body-care/advanced-repair-cream', available: true }
      ],
      description: 'Rich formula for very dry skin with ceramides'
    },
    {
      id: 'm8',
      name: 'Prequel Skin Recovery Moisturizer',
      brand: 'Prequel',
      price: 32.00,
      category: 'moisturizer',
      size: '1.7 oz',
      bestFor: ['dry', 'normal'],
      concerns: ['barrier-repair', 'anti-aging'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/prequel-recovery-moisturizer-P98765', available: true },
        { name: 'Brand Direct', url: 'https://prequelskin.com/products/recovery-moisturizer', available: true }
      ],
      description: 'Restorative cream with peptides and ceramides'
    },
    {
      id: 'm9',
      name: 'Good Molecules Ultra-Hydrating Facial Oil',
      brand: 'Good Molecules',
      price: 8.00,
      category: 'moisturizer',
      size: '1 oz',
      bestFor: ['dry', 'normal'],
      concerns: ['hydration', 'barrier-repair'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Good-Molecules-Ultra-Hydrating-Facial-Oil/dp/B084J7V6KL', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/ultra-hydrating-facial-oil', available: true },
        { name: 'Brand Direct', url: 'https://www.goodmolecules.com/products/ultra-hydrating-facial-oil', available: true }
      ],
      description: 'Lightweight squalane oil for extra hydration'
    },
    {
      id: 'm10',
      name: 'Cetaphil Daily Hydrating Lotion',
      brand: 'Cetaphil',
      price: 13.99,
      category: 'moisturizer',
      size: '3 oz',
      bestFor: ['all'],
      concerns: ['hydration'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Cetaphil-Daily-Hydrating-Lotion/dp/B08EXAMPLE', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/daily-hydrating-lotion', available: true },
        { name: 'Brand Direct', url: 'https://www.cetaphil.com/us/moisturizers/daily-hydrating-lotion', available: true }
      ],
      description: 'Hyaluronic acid lotion for daily hydration'
    },

    // ===== SUNSCREENS (10) =====
    {
      id: 's1',
      name: 'CeraVe Ultra-Light Moisturizing Lotion SPF 30',
      brand: 'CeraVe',
      price: 16.99,
      category: 'sunscreen',
      size: '1.7 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['lightweight', 'non-greasy'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/CeraVe-Ultra-Light-Moisturizing-Lotion-SPF/dp/B07TXKLXQJ', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/ultra-light-moisturizing-lotion-spf-30', available: true },
        { name: 'Brand Direct', url: 'https://www.cerave.com/skincare/sunscreen/ultra-light-moisturizing-lotion-spf-30', available: true }
      ],
      description: 'Lightweight chemical sunscreen with niacinamide'
    },
    {
      id: 's2',
      name: 'CeraVe Hydrating Mineral Sunscreen SPF 30',
      brand: 'CeraVe',
      price: 17.99,
      category: 'sunscreen',
      size: '1.7 oz',
      bestFor: ['dry', 'normal'],
      concerns: ['mineral', 'hydration'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/CeraVe-Hydrating-Mineral-Sunscreen-SPF/dp/B07TXFKJDP', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/hydrating-mineral-sunscreen-spf-30', available: true },
        { name: 'Brand Direct', url: 'https://www.cerave.com/skincare/sunscreen/hydrating-mineral-sunscreen-spf-30', available: true }
      ],
      description: 'Mineral sunscreen with zinc oxide and ceramides'
    },
    {
      id: 's3',
      name: 'Cetaphil Sheer Mineral Sunscreen SPF 30',
      brand: 'Cetaphil',
      price: 14.99,
      category: 'sunscreen',
      size: '1.7 oz',
      bestFor: ['all'],
      concerns: ['mineral', 'gentle'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Cetaphil-Sheer-Mineral-Sunscreen-SPF/dp/B07PYK89L6', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/sheer-mineral-sunscreen-spf-30', available: true },
        { name: 'Brand Direct', url: 'https://www.cetaphil.com/us/sun-care/sheer-mineral-sunscreen-spf-30', available: true }
      ],
      description: 'Dermatologist-tested mineral SPF with zinc oxide'
    },
    {
      id: 's4',
      name: 'Eucerin Daily Protection Face Lotion SPF 30',
      brand: 'Eucerin',
      price: 11.99,
      category: 'sunscreen',
      size: '4 oz',
      bestFor: ['all'],
      concerns: ['lightweight', 'hydration'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Eucerin-Daily-Protection-Face-Lotion/dp/B004D2822Q', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/daily-protection-face-lotion-spf-30', available: true },
        { name: 'Brand Direct', url: 'https://www.eucerinus.com/products/sun-protection/daily-protection-face-lotion-spf-30', available: true }
      ],
      description: 'Daily moisturizing sunscreen for all skin types'
    },
    {
      id: 's5',
      name: 'Malezia 5% Urea Sunscreen SPF 30',
      brand: 'Malezia',
      price: 24.99,
      category: 'sunscreen',
      size: '3.4 oz',
      bestFor: ['oily', 'combination'],
      concerns: ['fungal-acne', 'lightweight'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Malezia-Urea-Sunscreen-SPF-30/dp/B0CEXAMPLE', available: true },
        { name: 'Brand Direct', url: 'https://malezia.com/products/urea-sunscreen-spf-30', available: true }
      ],
      description: 'Fungal acne-safe mineral sunscreen with urea'
    },
    {
      id: 's6',
      name: 'Prequel Skin Daily Mineral SPF 50',
      brand: 'Prequel',
      price: 36.00,
      category: 'sunscreen',
      size: '1.7 oz',
      bestFor: ['all'],
      concerns: ['mineral', 'high-protection'],
      stores: [
        { name: 'Sephora', url: 'https://www.sephora.com/product/prequel-daily-mineral-spf-50-P45678', available: true },
        { name: 'Brand Direct', url: 'https://prequelskin.com/products/daily-mineral-spf-50', available: true }
      ],
      description: 'Elegant mineral SPF 50 with no white cast'
    },
    {
      id: 's7',
      name: 'CeraVe AM Facial Moisturizing Lotion SPF 30',
      brand: 'CeraVe',
      price: 15.99,
      category: 'sunscreen',
      size: '3 oz',
      bestFor: ['dry', 'normal'],
      concerns: ['hydration', 'chemical'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/CeraVe-Facial-Moisturizing-Lotion-AM/dp/B00F97FHAW', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/am-facial-moisturizing-lotion-spf-30', available: true },
        { name: 'Brand Direct', url: 'https://www.cerave.com/skincare/moisturizers/am-facial-moisturizing-lotion-spf-30', available: true }
      ],
      description: 'Moisturizer with SPF 30 and niacinamide'
    },
    {
      id: 's8',
      name: 'Cetaphil Daily Facial Moisturizer SPF 50',
      brand: 'Cetaphil',
      price: 15.99,
      category: 'sunscreen',
      size: '1.7 oz',
      bestFor: ['all'],
      concerns: ['high-protection', 'hydration'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Cetaphil-Daily-Facial-Moisturizer-SPF-50/dp/B08EXAMPLE', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/daily-facial-moisturizer-spf-50', available: true },
        { name: 'Brand Direct', url: 'https://www.cetaphil.com/us/sun-care/daily-facial-moisturizer-spf-50', available: true }
      ],
      description: 'Higher SPF daily moisturizer'
    },
    {
      id: 's9',
      name: 'Eucerin Sun Sensitive Protect Face Fluid SPF 50+',
      brand: 'Eucerin',
      price: 19.99,
      category: 'sunscreen',
      size: '1.7 oz',
      bestFor: ['all'],
      concerns: ['high-protection', 'lightweight'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Eucerin-Sun-Sensitive-Protect-Fluid/dp/B08NW5P1RL', available: true },
        { name: 'Brand Direct', url: 'https://www.eucerinus.com/products/sun-protection/sun-sensitive-protect-face-fluid-spf-50', available: true }
      ],
      description: 'Ultra-light SPF 50+ for daily use'
    },
    {
      id: 's10',
      name: 'Good Molecules Daily Lightweight Sunscreen SPF 35',
      brand: 'Good Molecules',
      price: 14.00,
      category: 'sunscreen',
      size: '1.7 oz',
      bestFor: ['oily', 'combination', 'normal'],
      concerns: ['lightweight', 'non-greasy'],
      stores: [
        { name: 'Amazon', url: 'https://www.amazon.com/Good-Molecules-Daily-Lightweight-Sunscreen/dp/B0EXAMPLE', available: true },
        { name: 'Ulta', url: 'https://www.ulta.com/p/daily-lightweight-sunscreen-spf-35', available: true },
        { name: 'Brand Direct', url: 'https://www.goodmolecules.com/products/daily-lightweight-sunscreen', available: true }
      ],
      description: 'Affordable chemical sunscreen with clean finish'
    }
  ];

  const saveProducts = (updatedProducts) => {
    try {
      localStorage.setItem('skincare_products', JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error saving products:', error);
      alert('Failed to save products. Please try again.');
    }
  };

  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: `p${Date.now()}`,
    };
    const updatedProducts = [...products, newProduct];
    saveProducts(updatedProducts);
    setShowProductForm(false);
  };

  const updateProduct = (productData) => {
    const updatedProducts = products.map(p =>
      p.id === productData.id ? productData : p
    );
    saveProducts(updatedProducts);
    setEditingProduct(null);
  };

  const deleteProduct = (productId) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== productId);
      saveProducts(updatedProducts);
    }
  };

  const filterProducts = () => {
    return products.filter(product => {
      const matchesStore = selectedStores.length === 0 || 
        product.stores.some(s => selectedStores.includes(s.name) && s.available);
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      return matchesStore && matchesPrice;
    });
  };

  const getRecommendedProducts = (category) => {
    if (!skinType) return [];
    
    const filtered = filterProducts().filter(p => p.category === category);
    
    const scored = filtered.map(p => ({
      product: p,
      score: (p.bestFor.includes(skinType) ? 3 : 0) +
             (p.bestFor.includes('all') ? 1 : 0) +
             concerns.filter(c => p.concerns.includes(c)).length * 2
    }));
    
    return scored.sort((a, b) => b.score - a.score).map(s => s.product);
  };

  useEffect(() => {
    if (skinType && quizStep === 4) {
      setRoutine({
        cleanser: getRecommendedProducts('cleanser')[0] || null,
        treatment: getRecommendedProducts('treatment')[0] || null,
        moisturizer: getRecommendedProducts('moisturizer')[0] || null,
        sunscreen: getRecommendedProducts('sunscreen')[0] || null
      });
    }
  }, [quizStep, skinType, concerns, selectedStores, priceRange, products]);

  const getTotalCost = () => {
    let total = 0;
    if (routine.cleanser) total += routine.cleanser.price;
    if (routine.treatment) total += routine.treatment.price;
    if (routine.moisturizer) total += routine.moisturizer.price;
    if (routine.sunscreen) total += routine.sunscreen.price;
    return total.toFixed(2);
  };

  const handleNextStep = () => {
    if (quizStep === 1 && !skinType) {
      alert('Please select your skin type');
      return;
    }
    if (quizStep === 2 && concerns.length === 0) {
      alert('Please select at least one concern');
      return;
    }
    setQuizStep(quizStep + 1);
  };

  const handlePrevStep = () => {
    setQuizStep(quizStep - 1);
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setSkinType('');
    setConcerns([]);
    setSelectedStores([]);
    setPriceRange({ min: 0, max: 50 });
  };

  const exportShoppingList = () => {
    const items = [routine.cleanser, routine.treatment, routine.moisturizer, routine.sunscreen].filter(Boolean);
    const text = `My Skincare Shopping List\n\n` +
      items.map(item => 
        `${item.name} - ${item.brand}\n` +
        `Price: $${item.price} | Size: ${item.size}\n` +
        `Where to buy:\n` +
        item.stores.filter(s => s.available).map(s => `  • ${s.name}: ${s.url}`).join('\n') +
        `\n\n`
      ).join('') +
      `Total: $${getTotalCost()}`;
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skincare-shopping-list.txt';
    a.click();
  };

  const shareRoutine = async () => {
    const items = [routine.cleanser, routine.treatment, routine.moisturizer, routine.sunscreen].filter(Boolean);
    const text = `✨ My Personalized Skincare Routine ✨\n\n` +
      items.map(item => `• ${item.category.toUpperCase()}: ${item.name} (${item.brand})`).join('\n') +
      `\n\nTotal Cost: $${getTotalCost()}\n` +
      `Generated by Budget Glow`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Skincare Routine',
          text: text,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard if sharing is not supported
      try {
        await navigator.clipboard.writeText(text);
        alert('Routine copied to clipboard! You can now paste it into a text message.');
      } catch (err) {
        console.error('Failed to copy:', err);
        alert('Unable to share. Please try the Export button instead.');
      }
    }
  };

  const saveRoutine = () => {
    try {
      const stored = localStorage.getItem('saved_routines');
      const routines = stored ? JSON.parse(stored) : [];
      const newRoutine = {
        id: Date.now(),
        skinType,
        concerns,
        products: routine,
        date: new Date().toISOString()
      };
      routines.push(newRoutine);
      localStorage.setItem('saved_routines', JSON.stringify(routines));
      alert('Routine saved successfully!');
    } catch (error) {
      console.error('Error saving routine:', error);
      alert('Failed to save routine. Please try again.');
    }
  };

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center', background: '#0a0a0a', color: '#f5f5f5', minHeight: '100vh' }}>Loading...</div>;
  }

  const ProductCard = ({ product, icon: Icon }) => (
    <div className="product-card">
      <div className="product-icon">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div className="product-content">
        <div className="product-brand">{product.brand}</div>
        <h3>{product.name}</h3>
        <div className="product-meta">
          <span className="size">{product.size}</span>
          <span className="price">${product.price}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-tags">
          {product.bestFor.slice(0, 3).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="store-links">
          <h4>Buy at:</h4>
          {product.stores.filter(s => s.available).map(store => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="store-link"
            >
              <span>{store.name}</span>
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app {
          min-height: 100vh;
          background: #0a0a0a;
          font-family: 'Inter', sans-serif;
          color: #f5f5f5;
          padding: 20px;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 20px;
          border-bottom: 1px solid #2a2a2a;
          animation: fadeIn 0.6s ease-out;
        }

        .header-content h1 {
          font-family: 'Space Mono', monospace;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #f5f5f5;
          margin-bottom: 8px;
          letter-spacing: -0.03em;
        }

        .tagline {
          font-size: 0.95rem;
          color: #999;
          font-weight: 300;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .admin-toggle {
          background: transparent;
          border: 1px solid #333;
          padding: 12px 24px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          color: #999;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .admin-toggle:hover {
          background: #1a1a1a;
          border-color: #555;
          color: #f5f5f5;
        }

        .admin-toggle.active {
          background: #f5f5f5;
          color: #0a0a0a;
          border-color: #f5f5f5;
        }

        .progress-bar {
          max-width: 800px;
          margin: 40px auto 20px;
          animation: fadeInUp 0.6s ease-out;
        }

        .progress-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 0 0 auto;
        }

        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #666;
          transition: all 0.3s ease;
          font-family: 'Space Mono', monospace;
        }

        .progress-step.active .step-number {
          border-color: #f5f5f5;
          background: #f5f5f5;
          color: #0a0a0a;
        }

        .step-label {
          font-size: 0.75rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .progress-step.active .step-label {
          color: #f5f5f5;
        }

        .progress-line {
          flex: 1;
          height: 2px;
          background: #333;
          margin: 0 16px;
          transition: all 0.3s ease;
        }

        .progress-line.active {
          background: #f5f5f5;
        }

        .quiz-panel {
          max-width: 800px;
          margin: 0 auto;
          background: #111;
          border: 1px solid #222;
          border-radius: 8px;
          padding: 60px 40px;
          animation: fadeInUp 0.6s ease-out 0.1s both;
          text-align: center;
        }

        .quiz-title {
          font-family: 'Space Mono', monospace;
          font-size: 2rem;
          color: #f5f5f5;
          margin-bottom: 12px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .quiz-subtitle {
          font-size: 1rem;
          color: #999;
          margin-bottom: 40px;
        }

        .quiz-options {
          display: grid;
          gap: 16px;
          margin-bottom: 40px;
        }

        .quiz-option {
          background: transparent;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .quiz-option:hover {
          border-color: #555;
          background: #1a1a1a;
        }

        .quiz-option.selected {
          background: #f5f5f5;
          border-color: #f5f5f5;
        }

        .quiz-option .option-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #f5f5f5;
          margin-bottom: 8px;
        }

        .quiz-option.selected .option-title {
          color: #0a0a0a;
        }

        .quiz-option .option-description {
          font-size: 0.9rem;
          color: #999;
        }

        .quiz-option.selected .option-description {
          color: #666;
        }

        .quiz-options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin-bottom: 40px;
        }

        .quiz-option-small {
          background: transparent;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 20px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          font-size: 0.95rem;
          font-weight: 500;
          color: #f5f5f5;
        }

        .quiz-option-small:hover {
          border-color: #555;
          background: #1a1a1a;
        }

        .quiz-option-small.selected {
          background: #f5f5f5;
          color: #0a0a0a;
          border-color: #f5f5f5;
        }

        .preferences-section {
          display: grid;
          gap: 32px;
          margin-bottom: 40px;
          text-align: left;
        }

        .preference-group h3 {
          font-size: 0.9rem;
          color: #f5f5f5;
          margin-bottom: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .store-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .quiz-navigation {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .quiz-navigation .btn {
          min-width: 120px;
        }

        .selection-panel {
          background: #111;
          border: 1px solid #222;
          border-radius: 8px;
          padding: 40px;
          margin: 30px 0;
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .panel-title {
          font-family: 'Space Mono', monospace;
          font-size: 1.4rem;
          color: #f5f5f5;
          margin-bottom: 24px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .skin-types {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          margin-bottom: 32px;
        }

        .skin-type-btn {
          background: transparent;
          border: 1px solid #333;
          border-radius: 4px;
          padding: 18px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.95rem;
          font-weight: 500;
          color: #999;
          text-align: center;
        }

        .skin-type-btn:hover {
          border-color: #555;
          color: #f5f5f5;
        }

        .skin-type-btn.selected {
          background: #f5f5f5;
          color: #0a0a0a;
          border-color: #f5f5f5;
        }

        .filters-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-top: 24px;
        }

        .filter-group h3 {
          font-size: 0.9rem;
          color: #f5f5f5;
          margin-bottom: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .store-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .store-chip {
          background: transparent;
          border: 1px solid #333;
          border-radius: 20px;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.85rem;
          color: #999;
        }

        .store-chip:hover {
          border-color: #555;
          color: #f5f5f5;
        }

        .store-chip.selected {
          background: #f5f5f5;
          color: #0a0a0a;
          border-color: #f5f5f5;
        }

        .price-slider {
          margin-top: 12px;
        }

        .price-slider input {
          width: 100%;
          margin: 8px 0;
        }

        .price-display {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #999;
          margin-top: 8px;
        }

        .concerns-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 10px;
          margin-top: 12px;
        }

        .concern-tag {
          background: transparent;
          border: 1px solid #333;
          border-radius: 4px;
          padding: 12px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.85rem;
          color: #999;
          text-align: center;
        }

        .concern-tag:hover {
          border-color: #555;
          color: #f5f5f5;
        }

        .concern-tag.selected {
          background: #f5f5f5;
          color: #0a0a0a;
          border-color: #f5f5f5;
        }

        .routine-section {
          margin: 40px 0;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #222;
        }

        .section-header h2 {
          font-family: 'Space Mono', monospace;
          font-size: 1.8rem;
          color: #f5f5f5;
          font-weight: 700;
        }

        .action-buttons {
          display: flex;
          gap: 12px;
        }

        .action-btn {
          background: transparent;
          border: 1px solid #333;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          color: #999;
          font-weight: 500;
          font-size: 0.85rem;
        }

        .action-btn:hover {
          background: #1a1a1a;
          border-color: #555;
          color: #f5f5f5;
        }

        .routine-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .product-card {
          background: #111;
          border: 1px solid #222;
          border-radius: 8px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .product-card:hover {
          border-color: #333;
          transform: translateY(-2px);
        }

        .product-icon {
          width: 44px;
          height: 44px;
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f5f5f5;
          margin-bottom: 16px;
        }

        .product-brand {
          font-size: 0.75rem;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .product-content h3 {
          font-size: 1.1rem;
          color: #f5f5f5;
          margin-bottom: 12px;
          font-weight: 600;
          line-height: 1.3;
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #1a1a1a;
        }

        .size {
          font-size: 0.85rem;
          color: #666;
          font-weight: 500;
        }

        .price {
          font-size: 1.3rem;
          color: #f5f5f5;
          font-weight: 600;
          font-family: 'Space Mono', monospace;
        }

        .product-description {
          font-size: 0.9rem;
          color: #999;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .product-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .tag {
          background: #1a1a1a;
          border: 1px solid #333;
          color: #999;
          padding: 4px 10px;
          border-radius: 3px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .store-links {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #1a1a1a;
        }

        .store-links h4 {
          font-size: 0.75rem;
          color: #666;
          margin-bottom: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .store-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: #1a1a1a;
          border: 1px solid #222;
          border-radius: 4px;
          margin-bottom: 6px;
          text-decoration: none;
          color: #999;
          transition: all 0.2s ease;
          font-size: 0.85rem;
        }

        .store-link:hover {
          background: #222;
          border-color: #333;
          color: #f5f5f5;
        }

        .summary-card {
          background: #111;
          border: 1px solid #222;
          color: #f5f5f5;
          border-radius: 8px;
          padding: 40px;
          margin-top: 40px;
          animation: fadeInUp 0.6s ease-out 0.3s both;
        }

        .summary-title {
          font-family: 'Space Mono', monospace;
          font-size: 1.8rem;
          margin-bottom: 24px;
          font-weight: 700;
        }

        .summary-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #1a1a1a;
          border: 1px solid #222;
          border-radius: 4px;
        }

        .summary-item-name {
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #f5f5f5;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid #333;
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Space Mono', monospace;
        }

        .disclaimer {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #222;
        }

        .disclaimer p {
          font-size: 0.8rem;
          line-height: 1.6;
          color: #666;
          font-style: italic;
        }

        .disclaimer strong {
          font-style: normal;
          font-weight: 600;
          color: #999;
        }

        .admin-panel {
          background: #111;
          border: 1px solid #222;
          border-radius: 8px;
          padding: 40px;
          margin: 20px 0;
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .category-tabs {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
          border-bottom: 1px solid #222;
        }

        .category-tab {
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 12px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          color: #666;
          font-weight: 500;
          font-size: 0.9rem;
          margin-bottom: -1px;
        }

        .category-tab:hover {
          color: #999;
        }

        .category-tab.active {
          color: #f5f5f5;
          border-bottom-color: #f5f5f5;
        }

        .products-list {
          display: grid;
          gap: 16px;
        }

        .admin-product-card {
          background: #1a1a1a;
          border: 1px solid #222;
          border-radius: 4px;
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: start;
        }

        .admin-product-info h4 {
          font-size: 1.1rem;
          color: #f5f5f5;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .admin-product-meta {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 12px;
        }

        .admin-actions {
          display: flex;
          gap: 8px;
        }

        .icon-btn {
          background: transparent;
          border: 1px solid #333;
          width: 40px;
          height: 40px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: #999;
        }

        .icon-btn:hover {
          background: #222;
          border-color: #555;
          color: #f5f5f5;
        }

        .icon-btn.delete:hover {
          background: #d64545;
          border-color: #d64545;
          color: white;
        }

        .product-form {
          background: #1a1a1a;
          border: 1px solid #222;
          border-radius: 4px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.85rem;
          color: #999;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 10px 14px;
          border: 1px solid #333;
          border-radius: 4px;
          font-size: 0.95rem;
          color: #f5f5f5;
          background: #111;
          font-family: 'Inter', sans-serif;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #555;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 80px;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }

        .btn {
          padding: 10px 20px;
          border-radius: 4px;
          border: 1px solid #333;
          background: transparent;
          color: #999;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        .btn.primary {
          background: #f5f5f5;
          color: #0a0a0a;
          border-color: #f5f5f5;
        }

        .btn:hover {
          background: #1a1a1a;
          border-color: #555;
          color: #f5f5f5;
        }

        .btn.primary:hover {
          background: #fff;
        }

        .btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          pointer-events: none;
        }

        .empty-state {
          text-align: center;
          padding: 80px 20px;
          color: #666;
        }

        .empty-state-icon {
          width: 80px;
          height: 80px;
          background: #1a1a1a;
          border: 1px solid #222;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #666;
        }

        .empty-state h3 {
          font-family: 'Space Mono', monospace;
          font-size: 1.5rem;
          margin-bottom: 8px;
          color: #999;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer {
          text-align: center;
          padding: 40px 20px;
          margin-top: 60px;
          border-top: 1px solid #222;
          color: #666;
        }

        .footer p {
          font-size: 0.85rem;
          margin: 0;
        }

        .footer-note {
          margin-top: 8px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .selection-panel,
          .admin-panel {
            padding: 24px 20px;
          }

          .routine-grid {
            grid-template-columns: 1fr;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <header>
          <div className="header-content">
            <h1>BUDGET GLOW</h1>
            <p className="tagline">Curated Affordable Skincare</p>
          </div>
          <button 
            className={`admin-toggle ${adminMode ? 'active' : ''}`}
            onClick={() => setAdminMode(!adminMode)}
          >
            <Settings size={18} />
            {adminMode ? 'Exit Admin' : 'Admin'}
          </button>
        </header>

        {adminMode ? (
          <AdminPanel
            products={products}
            onAdd={addProduct}
            onUpdate={updateProduct}
            onDelete={deleteProduct}
            showForm={showProductForm}
            setShowForm={setShowProductForm}
            editingProduct={editingProduct}
            setEditingProduct={setEditingProduct}
          />
        ) : (
          <>
            {/* Progress Indicator */}
            {quizStep < 4 && (
              <div className="progress-bar">
                <div className="progress-steps">
                  <div className={`progress-step ${quizStep >= 1 ? 'active' : ''}`}>
                    <div className="step-number">1</div>
                    <div className="step-label">Skin Type</div>
                  </div>
                  <div className={`progress-line ${quizStep >= 2 ? 'active' : ''}`}></div>
                  <div className={`progress-step ${quizStep >= 2 ? 'active' : ''}`}>
                    <div className="step-number">2</div>
                    <div className="step-label">Concerns</div>
                  </div>
                  <div className={`progress-line ${quizStep >= 3 ? 'active' : ''}`}></div>
                  <div className={`progress-step ${quizStep >= 3 ? 'active' : ''}`}>
                    <div className="step-number">3</div>
                    <div className="step-label">Preferences</div>
                  </div>
                </div>
              </div>
            )}

            {/* Quiz Steps */}
            {quizStep === 1 && (
              <div className="quiz-panel">
                <h2 className="quiz-title">What's your skin type?</h2>
                <p className="quiz-subtitle">Select the one that best describes your skin</p>
                
                <div className="quiz-options">
                  {['dry', 'oily', 'combination', 'normal'].map(type => (
                    <button
                      key={type}
                      className={`quiz-option ${skinType === type ? 'selected' : ''}`}
                      onClick={() => setSkinType(type)}
                    >
                      <div className="option-title">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                      <div className="option-description">
                        {type === 'dry' && 'Tight, flaky, or rough texture'}
                        {type === 'oily' && 'Shiny, enlarged pores, prone to breakouts'}
                        {type === 'combination' && 'Oily T-zone, dry cheeks'}
                        {type === 'normal' && 'Balanced, not too oily or dry'}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="quiz-navigation">
                  <button className="btn primary" onClick={handleNextStep} disabled={!skinType}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div className="quiz-panel">
                <h2 className="quiz-title">What are your main concerns?</h2>
                <p className="quiz-subtitle">Select all that apply</p>
                
                <div className="quiz-options-grid">
                  {['acne', 'anti-aging', 'texture', 'oil-control', 'hydration', 'dark-spots'].map(concern => (
                    <button
                      key={concern}
                      className={`quiz-option-small ${concerns.includes(concern) ? 'selected' : ''}`}
                      onClick={() => {
                        setConcerns(prev =>
                          prev.includes(concern)
                            ? prev.filter(c => c !== concern)
                            : [...prev, concern]
                        );
                      }}
                    >
                      {concern.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </button>
                  ))}
                </div>

                <div className="quiz-navigation">
                  <button className="btn" onClick={handlePrevStep}>
                    Back
                  </button>
                  <button className="btn primary" onClick={handleNextStep} disabled={concerns.length === 0}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {quizStep === 3 && (
              <div className="quiz-panel">
                <h2 className="quiz-title">Set your preferences</h2>
                <p className="quiz-subtitle">Customize your budget and store options</p>
                
                <div className="preferences-section">
                  <div className="preference-group">
                    <h3>Price Range per Product</h3>
                    <div className="price-slider">
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                      />
                      <div className="price-display">
                        <span>Up to ${priceRange.max}</span>
                      </div>
                    </div>
                  </div>

                  <div className="preference-group">
                    <h3>Preferred Stores (Optional)</h3>
                    <div className="store-chips">
                      {stores.map(store => (
                        <button
                          key={store}
                          className={`store-chip ${selectedStores.includes(store) ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedStores(prev =>
                              prev.includes(store)
                                ? prev.filter(s => s !== store)
                                : [...prev, store]
                            );
                          }}
                        >
                          {store}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="quiz-navigation">
                  <button className="btn" onClick={handlePrevStep}>
                    Back
                  </button>
                  <button className="btn primary" onClick={handleNextStep}>
                    Get My Routine
                  </button>
                </div>
              </div>
            )}

            {/* Results */}
            {quizStep === 4 && (routine.cleanser || routine.treatment || routine.moisturizer || routine.sunscreen) && (
              <div className="routine-section">
                <div className="section-header">
                  <h2>Your Routine</h2>
                  <div className="action-buttons">
                    <button className="action-btn" onClick={resetQuiz}>
                      <X size={16} />
                      Start Over
                    </button>
                    <button className="action-btn" onClick={saveRoutine}>
                      <Save size={16} />
                      Save
                    </button>
                    <button className="action-btn" onClick={exportShoppingList}>
                      <Download size={16} />
                      Export
                    </button>
                    <button className="action-btn" onClick={shareRoutine}>
                      <ExternalLink size={16} />
                      Share / Text
                    </button>
                  </div>
                </div>

                <div className="routine-grid">
                  {routine.cleanser && (
                    <ProductCard product={routine.cleanser} icon={Droplet} />
                  )}
                  {routine.treatment && (
                    <ProductCard product={routine.treatment} icon={Zap} />
                  )}
                  {routine.moisturizer && (
                    <ProductCard product={routine.moisturizer} icon={Sparkles} />
                  )}
                  {routine.sunscreen && (
                    <ProductCard product={routine.sunscreen} icon={Sun} />
                  )}
                </div>

                <div className="summary-card">
                  <h3 className="summary-title">Complete Routine</h3>
                  <div className="summary-items">
                    {routine.cleanser && (
                      <div className="summary-item">
                        <span className="summary-item-name">
                          <Check size={18} />
                          {routine.cleanser.name}
                        </span>
                        <span>${routine.cleanser.price}</span>
                      </div>
                    )}
                    {routine.treatment && (
                      <div className="summary-item">
                        <span className="summary-item-name">
                          <Check size={18} />
                          {routine.treatment.name}
                        </span>
                        <span>${routine.treatment.price}</span>
                      </div>
                    )}
                    {routine.moisturizer && (
                      <div className="summary-item">
                        <span className="summary-item-name">
                          <Check size={18} />
                          {routine.moisturizer.name}
                        </span>
                        <span>${routine.moisturizer.price}</span>
                      </div>
                    )}
                    {routine.sunscreen && (
                      <div className="summary-item">
                        <span className="summary-item-name">
                          <Check size={18} />
                          {routine.sunscreen.name}
                        </span>
                        <span>${routine.sunscreen.price}</span>
                      </div>
                    )}
                  </div>
                  <div className="summary-total">
                    <span>Total</span>
                    <span>${getTotalCost()}</span>
                  </div>
                  <div className="disclaimer">
                    <p>
                      <strong>Disclaimer:</strong> This tool is for fun and informational purposes only to help you explore budget-friendly skincare options. 
                      Product recommendations are based on general skin type preferences and do not constitute medical advice. 
                      Always consult with a dermatologist or qualified healthcare provider for personalized skincare recommendations, 
                      especially if you have specific skin concerns or conditions. Patch test new products before full application.
                    </p>
                    <p style={{ marginTop: '12px' }}>
                      <strong>Pricing Note:</strong> Prices shown are approximate and may not reflect current retailer pricing. 
                      Prices are updated manually and may change without notice. 
                      Always verify current prices and availability on the retailer's website before purchasing.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Footer */}
        <footer className="footer">
          <p>Prices last updated: {LAST_UPDATED}</p>
          <p className="footer-note">Budget Glow • Curated affordable skincare</p>
        </footer>
      </div>
    </div>
  );
}

function AdminPanel({ products, onAdd, onUpdate, onDelete, showForm, setShowForm, editingProduct, setEditingProduct }) {
  const [activeCategory, setActiveCategory] = useState('cleanser');

  const categoryCounts = {
    cleanser: products.filter(p => p.category === 'cleanser').length,
    treatment: products.filter(p => p.category === 'treatment').length,
    moisturizer: products.filter(p => p.category === 'moisturizer').length,
    sunscreen: products.filter(p => p.category === 'sunscreen').length
  };

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2 className="panel-title">Product Management ({products.length} total)</h2>
        <button className="action-btn primary" onClick={() => setShowForm(true)}>
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {(showForm || editingProduct) && (
        <ProductForm
          product={editingProduct}
          onSave={editingProduct ? onUpdate : onAdd}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      )}

      <div className="category-tabs">
        <button
          className={`category-tab ${activeCategory === 'cleanser' ? 'active' : ''}`}
          onClick={() => setActiveCategory('cleanser')}
        >
          <Droplet size={16} />
          Cleansers ({categoryCounts.cleanser})
        </button>
        <button
          className={`category-tab ${activeCategory === 'treatment' ? 'active' : ''}`}
          onClick={() => setActiveCategory('treatment')}
        >
          <Zap size={16} />
          Treatments ({categoryCounts.treatment})
        </button>
        <button
          className={`category-tab ${activeCategory === 'moisturizer' ? 'active' : ''}`}
          onClick={() => setActiveCategory('moisturizer')}
        >
          <Sparkles size={16} />
          Moisturizers ({categoryCounts.moisturizer})
        </button>
        <button
          className={`category-tab ${activeCategory === 'sunscreen' ? 'active' : ''}`}
          onClick={() => setActiveCategory('sunscreen')}
        >
          <Sun size={16} />
          Sunscreens ({categoryCounts.sunscreen})
        </button>
      </div>

      <div className="products-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="admin-product-card">
            <div className="admin-product-info">
              <h4>{product.name}</h4>
              <div className="admin-product-meta">
                {product.brand} • ${product.price} • {product.size}
              </div>
              <div className="product-tags">
                {product.bestFor.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="admin-actions">
              <button className="icon-btn" onClick={() => setEditingProduct(product)}>
                <Edit2 size={16} />
              </button>
              <button className="icon-btn delete" onClick={() => onDelete(product.id)}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState(product || {
    name: '',
    brand: '',
    price: '',
    category: 'cleanser',
    size: '',
    bestFor: [],
    concerns: [],
    stores: [],
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: parseFloat(formData.price)
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: '20px', color: '#f5f5f5' }}>
        {product ? 'Edit Product' : 'Add New Product'}
      </h3>

      <div className="form-grid">
        <div className="form-group">
          <label>Product Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Brand *</label>
          <input
            type="text"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Price *</label>
          <input
            type="number"
            step="0.01"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Category *</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="cleanser">Cleanser</option>
            <option value="treatment">Treatment</option>
            <option value="moisturizer">Moisturizer</option>
            <option value="sunscreen">Sunscreen</option>
          </select>
        </div>

        <div className="form-group">
          <label>Size *</label>
          <input
            type="text"
            placeholder="e.g., 16 oz"
            value={formData.size}
            onChange={(e) => setFormData({ ...formData, size: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Brief product description"
        />
      </div>

      <div className="form-group">
        <label>Best For (comma-separated)</label>
        <input
          type="text"
          placeholder="dry, oily, combination, normal"
          value={Array.isArray(formData.bestFor) ? formData.bestFor.join(', ') : ''}
          onChange={(e) => setFormData({ 
            ...formData, 
            bestFor: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
          })}
        />
      </div>

      <div className="form-group">
        <label>Concerns (comma-separated)</label>
        <input
          type="text"
          placeholder="acne, hydration, anti-aging"
          value={Array.isArray(formData.concerns) ? formData.concerns.join(', ') : ''}
          onChange={(e) => setFormData({ 
            ...formData, 
            concerns: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
          })}
        />
      </div>

      <div className="form-actions">
        <button type="button" className="btn" onClick={onCancel}>
          <X size={16} />
          Cancel
        </button>
        <button type="submit" className="btn primary">
          <Check size={16} />
          {product ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
}
div>
    </div>
  );
}
