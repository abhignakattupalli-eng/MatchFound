import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Laptop,
  Briefcase,
  BookOpen,
  CreditCard,
  Key,
  Shirt,
  Glasses,
  HelpCircle,
  PlusCircle,
  Sparkles,
  Search,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { itemService } from '../services/api';
import ItemCard from '../components/ItemCard';
import ClaimModal from '../components/ClaimModal';
import LoadingSpinner from '../components/LoadingSpinner';

const CATEGORIES = [
  { name: 'Electronics', icon: Laptop },
  { name: 'Bags', icon: Briefcase },
  { name: 'Books', icon: BookOpen },
  { name: 'ID Cards', icon: CreditCard },
  { name: 'Keys', icon: Key },
  { name: 'Clothing', icon: Shirt },
  { name: 'Accessories', icon: Glasses },
  { name: 'Other', icon: HelpCircle },
];

const HomePage = () => {
  const [recentItems, setRecentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClaimItem, setSelectedClaimItem] = useState(null);
  const navigate = useNavigate();

  const fetchRecentItems = async () => {
    try {
      setLoading(true);
      const res = await itemService.getItems({ limit: 6, sort: 'newest' });
      if (res.data.success) {
        setRecentItems(res.data.items || []);
      }
    } catch (err) {
      console.error('Error fetching recent items:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentItems();
  }, []);

  const handleCategoryClick = (catName) => {
    navigate(`/lost-items?category=${encodeURIComponent(catName)}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} /> Campus Security & Recovery Portal
            </div>
            <h1 className="hero-title">Lost Something on Campus?</h1>
            <p className="hero-subtitle">
              Report lost items, find missing belongings, and help return found items to their owners.
            </p>
            <div className="hero-actions">
              <Link to="/report-lost" className="btn btn-accent btn-lg">
                <PlusCircle size={18} /> Report Lost Item
              </Link>
              <Link to="/report-found" className="btn btn-outline-white btn-lg">
                <Sparkles size={18} /> Report Found Item
              </Link>
              <Link to="/lost-items" className="btn btn-secondary btn-lg">
                <Search size={18} /> Browse Items
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Explore by Category</h2>
              <p className="section-subtitle">
                Quickly locate items cataloged across campus facilities
              </p>
            </div>
          </div>

          <div className="category-grid">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="category-card"
                  onClick={() => handleCategoryClick(cat.name)}
                >
                  <div className="category-icon">
                    <Icon size={24} />
                  </div>
                  <span className="category-name">{cat.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recently Reported Items Section */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Recently Reported Items</h2>
              <p className="section-subtitle">
                Latest lost and verified found belongings logged across campus
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/lost-items" className="btn btn-secondary btn-sm">
                View All Lost ({'>'})
              </Link>
              <Link to="/found-items" className="btn btn-secondary btn-sm">
                View All Found ({'>'})
              </Link>
            </div>
          </div>

          {loading ? (
            <LoadingSpinner message="Retrieving latest campus reports..." />
          ) : recentItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
              <RotateCcw size={32} color="var(--text-light)" style={{ marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>No Reports Currently Listed</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Be the first to file a lost or found report.</p>
            </div>
          ) : (
            <div className="items-grid">
              {recentItems.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onClaimClick={(it) => setSelectedClaimItem(it)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Claim Modal */}
      {selectedClaimItem && (
        <ClaimModal
          item={selectedClaimItem}
          onClose={() => setSelectedClaimItem(null)}
          onSuccess={fetchRecentItems}
        />
      )}
    </div>
  );
};

export default HomePage;
