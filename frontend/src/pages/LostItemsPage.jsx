import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, RotateCcw, PlusCircle, AlertCircle } from 'lucide-react';
import { itemService } from '../services/api';
import ItemCard from '../components/ItemCard';
import LoadingSpinner from '../components/LoadingSpinner';

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

const LostItemsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [sort, setSort] = useState('newest');

  // Keep category in sync with query param if it changes
  useEffect(() => {
    if (searchParams.get('category')) {
      setCategory(searchParams.get('category'));
    }
  }, [searchParams]);

  const fetchLostItems = async () => {
    try {
      setLoading(true);
      setError('');
      const params = {
        type: 'lost',
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
      console.error('Error fetching lost items:', err);
      setError('Unable to load lost items. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLostItems();
  }, [category, sort]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchLostItems();
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategory('All');
    setLocation('');
    setDate('');
    setSort('newest');
    setSearchParams({});
    setTimeout(() => {
      fetchLostItems();
    }, 50);
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--danger)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Campus Directory
            </span>
            <h1 className="section-title">Lost Belongings</h1>
            <p className="section-subtitle">
              Browse, search, and help find items reported missing across campus grounds
            </p>
          </div>
          <Link to="/report-lost" className="btn btn-primary">
            <PlusCircle size={16} /> Report Lost Item
          </Link>
        </div>

        {/* Filter Toolbar (Section 4 features) */}
        <form onSubmit={handleSearchSubmit} className="filter-bar">
          <div className="filter-grid">
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Search by Item Name or Keyword</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. MacBook Pro, Blue Backpack, Keys..."
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
              <label className="form-label">Campus Location</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Library, Dining Hall..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Date Lost</label>
              <input
                type="date"
                className="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Sort By</label>
              <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="date_desc">Lost Date (Recent to Past)</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '0.85rem' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleResetFilters}
            >
              <RotateCcw size={14} /> Reset Filters
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              <Filter size={14} /> Apply Filters
            </button>
          </div>
        </form>

        {/* Results */}
        {loading ? (
          <LoadingSpinner message="Searching lost items database..." />
        ) : error ? (
          <div className="auth-alert auth-alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <Search size={36} color="var(--text-light)" style={{ marginBottom: '0.75rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              No Lost Items Matching Your Criteria
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
              Try adjusting your search terms or clearing your location and date filters.
            </p>
            <button onClick={handleResetFilters} className="btn btn-secondary btn-sm">
              Clear All Filters
            </button>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
              Showing {items.length} reported lost item{items.length !== 1 ? 's' : ''}
            </div>
            <div className="items-grid">
              {items.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LostItemsPage;
