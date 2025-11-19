import React from 'react'

type Props = {
    propsList: {
        heading: string;
        description: string;
    }[];
}

const ProsList = ({propsList}: Props) => {
    
    return (
        <>
            {propsList.map((props, index) => {
                return (
                    <div key={index} className="mb-8">
                        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#4e9eb8] mb-2">{props.heading}</h2>
                        <p className="text-gray-700">
                            {props.description}
                        </p>
                    </div>
                )
            })
            }
        </>
    )
}

export default ProsList