import React from 'react';

export const Categories: React.FC = () => {
  return (
    <div className="flex-1 p-6 ml-20 bg-background">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Categories</h1>
        <p className="text-muted-foreground">Organize your transactions with custom categories.</p>
      </div>
      
      <div className="bg-card p-8 rounded-lg border border-border shadow-sm text-center">
        <p className="text-muted-foreground">Categories page coming soon...</p>
      </div>
    </div>
  );
};

export default Categories;