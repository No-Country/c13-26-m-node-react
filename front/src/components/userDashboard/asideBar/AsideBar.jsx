import React from "react"
import NavigationLink from "../navigationLink/NavigationLink"
import NavigationGroup from "../navigationGroup/NavigationGroup"

const linksConfig = [
	{
		isGroup: false,
		icon: "icon",
		sectionPath: "personalInfo",
		sectionName: "Personal Info",
	},
	{
		isGroup: false,
		icon: "icon4",
		sectionPath: "myOrders",
		sectionName: "My orders",
	},
	{
		isGroup: true,
		icon: "icon",
		sectionPath: null,
		sectionName: "My store",
		links: [
			{
				isGroup: false,
				icon: "icon2",
				sectionPath: "myProducts",
				sectionName: "My products",
			},
			{
				isGroup: false,
				icon: "icon3",
				sectionPath: "addProducts",
				sectionName: "Add products",
			},
			{
				isGroup: false,
				icon: "icon3",
				sectionPath: "sellsRegistry",
				sectionName: "Sells registry",
			},
			{
				isGroup: false,
				icon: "icon3",
				sectionPath: "orders",
				sectionName: "Orders",
			},
		],
	},
]

const AsideBar = () => {
	return (
		<div
			className="flex flex-col gap-4 items-start
								h-[60vh] py-10 px-5
								shadow-container rounded-xl
								text-sm"
			id="aside-navbar"
		>

		{linksConfig.map(config => {
			if(!config.isGroup) {
				return <NavigationLink icon={config.icon} sectionPath={config.sectionPath} sectionName={config.sectionName} />
			} else {
				return <NavigationGroup icon={config.icon} sectionName={config.sectionName} links={config.links}/>
			}
		})}

		<button className="mt-auto self-center py-2 px-5 
											border border-neutral-700 rounded-2xl
											hover:bg-red-100"
											>x Logout</button>
		</div>
	)
}

export default AsideBar
