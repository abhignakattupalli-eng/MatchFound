import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Sparkles, Search, Filter, RotateCcw, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { itemService } from '../services/api';
import ItemCard from '../components/ItemCard';
import ClaimModal from '../components/ClaimModal';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = [
  'All',
  'Electronics',
  'Bags',
  'Books',
  'ID Cards',
  'Keys',
  'Clothing',
  'Accessories',
  'Other',
];

const FoundItemsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedClaimItem, setSelectedClaimItem] = useState(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [sort, setSort] = useState('newest');

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const fetchFoundItems = async () => {
    try {
      setLoading(true);
      setError('');
      const params = {
        type: 'found',
        sort,
      };

      if (searchTerm.trim()) params.search = searchTerm.trim();
      if (category && category !== 'All') params.category = category;
      if (location.trim()) params.location = location.trim();
      if (date) params.date = date;

      const res = await itemService.getItems(params);
      if (res.data.success) {
        setItems(res.data.items || []);
      }
    } catch (err) {
      console.error('Error fetching found items:', err);
      setError('Unable to load found items.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoundItems();
  }, [category, sort]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchFoundItems();
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategory('All');
    setLocation('');
    setDate('');
    setSort('newest');
    setSearchParams({});
    setTimeout(() => {
      fetchFoundItems();
    }, 50);
  };

  const handleClaimInitiated = (item) => {
    if (!isAuthenticated) {
      navigate('/login', {
        state: { message: 'Please log in to submit a claim for this item.' },
      });
      return;
    }
    setSelectedClaimItem(item);
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Verified Inventory
            </span>
            <h1 className="section-title">Found Belongings</h1>
            <p className="section-subtitle">
              Browse verified items turned into campus administration. Recognize yours? Submit an ownership claim.
            </p>
          </div>
          <Link to="/report-found" className="btn btn-accent">
            <Sparkles size={16} /> Report Found Item
          </Link>
        </div>

        {/* Security / Verification Badge info */}
        <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 'var(--radius-md)', padding: '0.85rem 1.25rem', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#065f46' }}>
          <ShieldCheck size={20} color="#059669" style={{ flexShrink: 0 }} />
          <span>
            <strong>Campus Verification Standard:</strong> Only verified found reports reviewed by campus security administration are publicly displayed to prevent false claims.
          </span>
        </div>

        {/* Filter Bar */}
        <form onSubmit={handleSearchSubmit} className="filter-bar">
          <div className="filter-grid">
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Search Item Name or Details</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. AirPods, HydroFlask, Sunglasses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ paddingLeft: '2.4rem' }}
                />
                <Search
                  size={16}
                  color="var(--text-light)"
                  style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  if (e.target.value === 'All') {
                    searchParams.delete('category');
                    setSearchParams(searchParams);
                  } else {
                    setSearchParams({ category: e.target.value });
                  }
                }}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Found Location</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Gym, Recreation Center, Union..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Date Found</label>
              <input
                type="date"
                className="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Sort Order</label>
              <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="date_desc">Found Date (Recent to Past)</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '0.85rem' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleResetFilters}
            >
              <RotateCcw size={14} /> Reset
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              <Filter size={14} /> Apply Filters
            </button>
          </div>
        </form>

        {/* Results */}
        {loading ? (
          <LoadingSpinner message="Loading verified found inventory..." />
        ) : error ? (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <Sparkles size={36} color="var(--text-light)" style={{ marginBottom: '0.75rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              No Verified Found Items Found
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
              No items currently match your search criteria. Check back soon or report a lost item.
            </p>
            <button onClick={handleResetFilters} className="btn btn-secondary btn-sm">
              Reset Filters
            </button>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
              Showing {items.length} verified found item{items.length !== 1 ? 's' : ''}
            </div>
            <div className="items-grid">
              {items.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onClaimClick={handleClaimInitiated}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Claim Modal */}
      {selectedClaimItem && (
        <ClaimModal
          item={selectedClaimItem}
          onClose={() => setSelectedClaimItem(null)}
          onSuccess={fetchFoundItems}
        />
      )}
    </div>
  );
};

export default FoundItemsPage;
