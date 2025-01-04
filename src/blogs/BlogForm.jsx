import { useState } from "react"
import { PostBlog } from "../services/BlogServices";
import { useNavigate } from "react-router-dom";
function BlogForm({handleFormVisibility}) {   

    const navigate = useNavigate()
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [isLoading,setIsLoading] = useState(false);


    async function  handleFormSubmit(e){
        e.preventDefault();
        setIsLoading(true)  
        console.log(title,body);
        try{
            const blogData = {title,body}
            const response = await PostBlog(blogData)
            setBody('')
            setTitle('')
            console.log(response)
           
        }catch(err){

        }finally{

            setIsLoading(false)
            handleFormVisibility();
        }
      
    }
    return (
        <>
            <div className="container-fluid flex  justify-center py-5">


                <form className="border-2 p-10">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-xl font-bold text-gray-900">Write a Blog</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">This blog post will be displayed publicly, so ensure it reflects your best content and keeps sensitive information private.

                                .</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">Title</label>
                                    <div className="mt-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-black   ">
                                            <input value = {title} onChange = {(e)=>{setTitle(e.target.value)}}type="text" name="title" id="title" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Title" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">Body</label>
                                    <div className="mt-2">
                                        <textarea value = {body} onChange= {(e)=>{setBody(e.target.value)}}name="about" id="about" rows="3" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"></textarea>
                                    </div>
                                    <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>




                            </div>
                        </div>




                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900" onClick={handleFormVisibility}>Cancel</button>
                        <button type="submit" onClick={handleFormSubmit} className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isLoading?'Posting...':'Post'}</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BlogForm