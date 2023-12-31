import {Dialog} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import React from "react";
import Logo from "./Logo.tsx";


const navigation = [
    { name: 'Spiritualité', href: '#' },
    { name: 'Histoire', href: '#' },
    { name: 'Les abbés', href: '#' },
    { name: 'Le travail', href: '#' },
    { name: 'Diaporamas', href: '#' },
    { name: 'Nous contacter', href: '#' },
    { name: 'Hôtellerie', href: '#' },
    { name: 'Magasin', href: '#' },
]

interface MobileMenuDialogProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuDialog:React.FC<MobileMenuDialogProps> = ({mobileMenuOpen, setMobileMenuOpen}) => {
    return (
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <Logo />
                    </a>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
};

export default MobileMenuDialog;