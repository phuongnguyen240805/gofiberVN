import { Input } from "../ui/input";
import { FcSearch } from "react-icons/fc";
const Search = () => {
    return (
        <div className="relative w-full my-6">
            <Input type="email" placeholder="enter your domain that you want to register..." className="w-full p-6 rounded-full text-white placeholder:text-white" />
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer">
                <FcSearch size={25} />
                <span className="text-blue-500">Check</span>
            </div>
        </div>
    );
}
export default Search;