"use client"

const routes = [
    {
        href: "/",
        label: "Overview",
    },
    {
        href: "transactions",
        label: "Transactions",
    },
    {
        href: "/accounts",
        label: "Accounts",
    },
    {
        href: "/categories",
        label: "Categories",
    },
    {
        href: "/settings",
        label: "Settings",
    },
]

const Navigation = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-700 to-blue-500 pc-4 py-8 lg:px-14 pb-36">
            </div>
        </>
    )
}

export default Navigation