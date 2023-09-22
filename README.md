# Drag-and-Drop Image Gallery

## Get Started
1. **Clone Repository**

*HTTPS*

`git clone https://github.com/Womoemy/dnd-gallery.git`

*SSH*

`git clone git@github.com:Womoemy/dnd-gallery.git`

2. **Navigate to the project directory**

`cd dnd-gallery`

3. **Install dependencies**

`npm install`

4. **Start the development server**

`npm run dev`

The project will be available on http://localhost:5173/


### Stage Three

#### Task: Develop a Drag-and-Drop Image gallery using React or Next Js

#### Objective: You will implement a fully functional and responsive image gallery that showcases a collection of images in a visually appealing way.
A user should be able to Login to the gallery page. Authenticated users should be able to use the Drag-and-Drop feature, they should be able to select and drag images, effortlessly rearranging them within the gallery.

#### Requirements:
##### Simple Authentication: 
This means login with this email and password:
UserName: user@example.com
Password: 1Password
The authentication form fields should have proper validation setup, with proper error messages. You do not need to implement this on the backend yourself, you could use solutions like NextAuth, Auth0 or Clerk, firebase for Auth or add etc.
##### Image Display:
Display a grid layout that showcases a collection of images presented in a visually appealing manner with consistent spacing and sizing, add a tag to each image.
##### Loading state:
The page should have a loading state for when images are not ready for display, display a skeleton loader or a loading spinner when loading is true
##### Search Functionality:
You should have a search field that filters the image list based on the tags added to the images.
##### Drag-and-Drop:
Implement the ability for users to drag and drop images within the gallery.
##### User-friendly Feedback:
Incorporate smooth animations and visual cues that provide feedback during drag and drop interactions.
##### Responsive Design:
Ensure that the gallery is responsive and functions seamlessly on different devices, including mobile phones, tablets, and desktops.
##### Design Flexibility:
While adhering to the above requirements, you have the creative freedom to come up with a unique and appealing design.

#### Acceptance Criteria:
Functional Authentication: A fully functional authentication process.
Drag-and-Drop Feature: A fully functional drag and drop feature must be implemented.
Responsiveness: Design must be responsive across various desktop  screens, including mobile and tablet screens.
User Experience: Design must be intuitive, appealing, and encourage easy navigation and operation (i.e., NO LAGGING).
Image Display: All Images should have consistent spacing and sizing.



<form className="md:flex items-center  justify-center p-2 mb-4">
                {/* <label htmlFor="searchBar" className="sr-only">
                    Search
                </label> */}
                <div className="relative w-full lg:w-[500px] ">
                    {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <BsHash className="w-4 h-4 text-gray-400" />
                    </div> */}
                    <input
                        type="text"
                        id="searchBar"
                        value={searchStr}
                        onChange={(e) => setSearchStr(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-600 block w-full pl-10 p-2.5"
                        placeholder="Search for images by tags..."
                        required
                    />
                </div>
            </form>


            // images.filter((image) => {
                        //     // return ( 
                        //     //     searchStr.toLowerCase() === "" ||
                        //     //     images.tags.some((tag) => 
                        //     //         tag.toLowerCase().includes(searchStr)
                        //     //     )    
                        //     // )
                        //     return searchStr.toLowerCase() === ""
                        //         ? image
                        //         : image.tags.some((tag) => 
                        //             tag.toLowerCase().includes(searchStr)
                        //         )
                        // })