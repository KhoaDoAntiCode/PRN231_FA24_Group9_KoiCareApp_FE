
// SuccessModal.tsx
import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path as needed

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigateHome: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, onNavigateHome }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Success</h3>
                <p>Your adoption form has been submitted successfully!</p>
                <div className="mt-6 flex justify-end">
                    <Button className="bg-blue-500 text-white p-2 rounded-md" onClick={onNavigateHome}>
                        Back to Home
                    </Button>
                    <Button className="ml-2 bg-gray-500 text-white p-2 rounded-md" onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
