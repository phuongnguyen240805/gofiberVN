import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { RiHome4Line } from "react-icons/ri";
export const Breadcumb = ({ title }: { title: string }) => {
    return (
        <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 font-bold text-xl">
                {title}
            </div>
            <Breadcrumb className="p-3">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-blue-500 flex gap-2 items-center"><RiHome4Line size={20} /> Home</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Client Page</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}