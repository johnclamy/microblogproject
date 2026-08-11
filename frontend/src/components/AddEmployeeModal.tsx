import React, { useState } from 'react'
import { X } from 'lucide-react'
import { type AddEmployeeModalProps } from '../types/employee'
import type EmployeeProps from '../types/employee'
import Button from './Button'


const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({
    isOpen,
    onClose,
    onSave 
}) => {
    const [formData, setFormData] = useState<Partial<EmployeeProps>>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        hireDate: new Date().toISOString().split('T')[0],
        jobId: '',
        salary: 0,
        commissionPct: null,
        managerId: null,
        departmentId: null,
        status: 'Inactive',
        avatarUrl: null
    })
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true)

        const formattedPayload = {
            id: crypto.randomUUID(),
            firstName: formData.firstName?.trim() || '',
            lastName: formData.lastName?.trim() || '',
            email: formData.email?.toLowerCase().trim() || '',
            phoneNumber: formData.phoneNumber?.trim() || '',
            hireDate: formData.hireDate,
            jobId: formData.jobId?.trim().toUpperCase() || '',
            salary: Number(formData.salary) || 0,
            commissionPct: formData.commissionPct ? Number(formData.commissionPct) / 100 : null,
            managerId: formData.managerId?.trim() || null,
            departmentId: formData.departmentId?.trim() || null,
            status: formData.status || 'Active',
            avatarUrl: formData.avatarUrl?.trim() || null
        }

        setTimeout(() => {
            onSave(formattedPayload as EmployeeProps)
            setIsSubmitting(false)
            onClose()
            
            // Reset state back to defaults
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                hireDate: new Date().toISOString().split('T')[0],
                jobId: '',
                salary: 0,
                commissionPct: null,
                managerId: null,
                departmentId: null,
                status: 'Active',
                avatarUrl: null
            })
        }, 600)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Dimmer Overlay */}
            <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-xs transition-opacity" onClick={onClose} />

            {/* Main Container */}
            <div className="relative w-full max-w-xl rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto dark:border-zinc-800 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 animate-in fade-in zoom-in-95 duration-200 z-10">
        
            {/* Dismiss trigger */}
            <button 
                onClick={onClose} 
                type="button"
                className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
            >
                <X className="h-4 w-4" />
            </button>

            <header className="mb-6">
                <h2 className="text-lg font-bold tracking-tight">Add New Employee</h2>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                    Fill out core profile markers.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Row 1: Name */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">First Name</label>
                        <input 
                            required 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName || ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Last Name</label>
                        <input 
                            required 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName || ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                        />
                    </div>
                </div>

                {/* Row 2: Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Email Address</label>
                        <input 
                            required 
                            type="email" 
                            name="email" 
                            value={formData.email || ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Phone Number</label>
                        <input 
                            required 
                            type="tel" 
                            name="phoneNumber" 
                            value={formData.phoneNumber || ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                        />
                    </div>
                </div>

                {/* Row 3: Timelines and Positions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Hire Date</label>
                        <input 
                            required 
                            type="date" 
                            name="hireDate" 
                            value={formData.hireDate || ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors text-zinc-600 dark:text-zinc-400" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Job ID</label>
                        <input 
                            required 
                            type="text" 
                            name="jobId" 
                            placeholder="e.g. SR_ENG" 
                            value={formData.jobId || ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Department ID</label>
                        <input 
                            type="text" 
                            name="departmentId" 
                            placeholder="Optional" 
                            value={formData.departmentId || ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                        />
                    </div>
                </div>

                {/* Row 4: Compensation Parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1">
                    <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Base Salary ($)</label>
                    <input 
                        required 
                        type="number" 
                        name="salary" 
                        placeholder="e.g. 75000" 
                        value={formData.salary ?? ''} 
                        onChange={handleInputChange} 
                        className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                    />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Commission (%)</label>
                        <input 
                            type="number" 
                            name="commissionPct" 
                            placeholder="e.g. 10" 
                            value={formData.commissionPct ?? ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Manager ID</label>
                        <input 
                            type="text" 
                            name="managerId" 
                            placeholder="Optional" 
                            value={formData.managerId || ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                        />
                    </div>
                </div>

                {/* Row 5: Avatar & Status */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2 flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Avatar Image URL</label>
                        <input 
                            type="url" 
                            name="avatarUrl" 
                            placeholder="https://example.com/avatar.jpg" 
                            value={formData.avatarUrl || ''} 
                            onChange={handleInputChange} 
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold uppercase tracking-wider text-zinc-400 text-[10px]">Status</label>
                        <select 
                            name="status" 
                            value={formData.status || 'Inactive'} 
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-zinc-200/80 p-2 bg-white dark:bg-zinc-950 dark:border-zinc-800 outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors"
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex justify-end gap-3 border-t border-zinc-100 dark:border-zinc-900 mt-6">
                    <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Saving...' : 'Add Employee'}
                    </Button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddEmployeeModal;