import React, { useState } from 'react';

interface FormProps {
    initialData?: { title?: string; description?: string; projectId?: number };
    onSubmit: (data: { title?: string; description?: string; projectId?: number }) => void;
}

const Form: React.FC<FormProps> = ({ initialData = {}, onSubmit }) => {
    const [title, setTitle] = useState(initialData.title || '');
    const [description, setDescription] = useState(initialData.description || '');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                placeholder="Title" 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <textarea 
                value={description} 
                placeholder="Description" 
                onChange={(e) => setDescription(e.target.value)} 
                required 
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;