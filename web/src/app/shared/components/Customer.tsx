// "use client"

// import React, { useEffect, useState } from 'react'
// import { useMutation } from "@tanstack/react-query";
// import Link from 'next/link';
// import { getAllProfiles } from '../services/superbase.service';

// const Customer = () => {
//     const [data, setData] = useState([]);

//     const fetch = useMutation({
//         mutationFn: async () => {
//             try {
//                 const response = await getAllProfiles();
//                 console.log('response', response)
//                 setData(response.data);
//             } catch (error: any) {
//                 console.error("Draft error:", error);
//                 throw new Error(error);
//             }
//         },
//     });

//     useEffect(() => {
//         fetch.mutate();
//     }, [])


//     return (
//         <>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
//                 {data.map((item: any) => (
//                     <Link
//                         href={`/${item.profile_name}`}
//                         key={item.id}
//                         className="block transition-transform duration-200 hover:scale-102"
//                     >
//                        <h1>{item.profile_name}</h1>
//                     </Link>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Customer