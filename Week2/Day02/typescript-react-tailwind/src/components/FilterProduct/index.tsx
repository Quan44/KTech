import { Category } from '@/types/Product';
import React, { useEffect, useState } from 'react';

type Props = {
    selected: number[];
    onChange: (ids: number[]) => void;
};

const CategoryFilter: React.FC<Props> = ({ selected, onChange }) => {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await response.json();
        setCategories(data);
        console.log(data);
    }
    
    console.log('Selected categories:', selected);

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
                {
                    categories.map((category) => (
                        <label key={category.id} className="flex items-center">
                            <input
                                type="checkbox"
                                name="category"
                                className="mr-2"
                                checked={selected[0] === category.id}
                                onChange={() => onChange([category.id])}
                            />
                            {category.name}
                        </label>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryFilter; 