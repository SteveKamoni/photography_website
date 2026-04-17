import React from 'react';
import styles from '../styles/App.module.scss';

/**
 * RouteLoadingFallback
 * Displayed while lazy-loaded route components are being imported.
 * Minimal styling to avoid layout shift.
 */
export function RouteLoadingFallback() {
  return (
    <div className={styles.loadingContainer} aria-busy="true" role="status">
      <div className={styles.spinner} aria-label="Loading page content..." />
    </div>
  );
}
