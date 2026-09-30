import React from 'react';
import { Search, Clock, CheckCircle2, ShieldAlert, Award, RotateCcw, XCircle } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const norm = (status || '').toLowerCase();

  if (norm === 'searching') {
    return (
      <span className="badge badge-searching">
        <Search size={12} /> Searching
      </span>
    );
  }

  if (norm.includes('pending')) {
    return (
      <span className="badge badge-pending">
        <Clock size={12} /> {status}
      </span>
    );
  }

  if (norm === 'found' || norm === 'verified') {
    return (
      <span className="badge badge-found">
        <CheckCircle2 size={12} /> Verified Found
      </span>
    );
  }

  if (norm === 'claimed') {
    return (
      <span className="badge badge-claimed">
        <Award size={12} /> Claimed
      </span>
    );
  }

  if (norm === 'returned') {
    return (
      <span className="badge badge-returned">
        <RotateCcw size={12} /> Returned
      </span>
    );
  }

  if (norm === 'rejected') {
    return (
      <span className="badge badge-rejected">
        <XCircle size={12} /> Rejected
      </span>
    );
  }

  return <span className="badge">{status}</span>;
};

export default StatusBadge;
