import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, ChevronRight, HandHeart } from 'lucide-react';
import StatusBadge from './StatusBadge';

// Category-based placeholder images if none provided
const CATEGORY_IMAGES = {
  Electronics: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
  Bags: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
  Books: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
  'ID Cards': 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80',
  Keys: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
  Clothing: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
  Accessories: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
  Other: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80',
};

const ItemCard = ({ item, onClaimClick }) => {
  const navigate = useNavigate();

  const imageUrl =
    item.image && item.image.trim() !== ''
      ? item.image
      : CATEGORY_IMAGES[item.category] || CATEGORY_IMAGES.Other;

  return (
    <div className="item-card">
      <div className="item-card-media">
        <img
          src={imageUrl}
          alt={item.itemName}
          className="item-card-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = CATEGORY_IMAGES[item.category] || CATEGORY_IMAGES.Other;
          }}
        />
        <span className={`item-card-type-tag ${item.type}`}>
          {item.type === 'lost' ? 'Lost Item' : 'Found Item'}
        </span>
        <div className="item-card-status">
          <StatusBadge status={item.status} />
        </div>
      </div>

      <div className="item-card-body">
        <div className="item-card-header">
          <span className="item-category-pill">{item.category}</span>
          <span className="item-report-id">#{item.reportId}</span>
        </div>

        <h3 className="item-card-title">{item.itemName}</h3>
        <p className="item-card-description">{item.description}</p>

        <div className="item-card-meta">
          <div className="meta-row">
            <MapPin size={14} color="var(--primary-light)" />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {item.location}
            </span>
          </div>
          <div className="meta-row">
            <Calendar size={14} color="var(--primary-light)" />
            <span>
              {item.type === 'lost' ? 'Lost on: ' : 'Found on: '}
              {item.date} {item.time ? `at ${item.time}` : ''}
            </span>
          </div>
        </div>

        <div className="item-card-actions">
          <Link
            to={`/items/${item._id}`}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, textDecoration: 'none' }}
          >
            View Details <ChevronRight size={14} />
          </Link>

          {item.type === 'found' &&
            item.status === 'Found' &&
            onClaimClick && (
              <button
                type="button"
                onClick={() => onClaimClick(item)}
                className="btn btn-accent btn-sm"
                title="Claim this item"
              >
                <HandHeart size={14} /> Claim
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
