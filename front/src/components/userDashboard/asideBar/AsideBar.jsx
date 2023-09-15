import React from "react"
import NavigationLink from "./navigationLink/NavigationLink"
import NavigationGroup from "./navigationGroup/NavigationGroup"
import icon from "../../../assets/icons/select-icon.svg"
import { useNavigate } from "react-router-dom"

const linksConfig = [
	{
		isGroup: false,
		icon: icon,
		sectionPath: "personalInfo",
		sectionName: "Informacion personal",
	},
	{
		isGroup: false,
		icon: icon,
		sectionPath: "myPurchases",
		sectionName: "Mis pedidos",
	},
	{
		isGroup: true,
		icon: icon,
		sectionPath: null,
		sectionName: "My store",
		links: [
			{
				isGroup: false,
				icon: icon,
				sectionPath: "myProducts",
				sectionName: "Mis productos",
			},
			{
				isGroup: false,
				icon: icon,
				sectionPath: "addProducts",
				sectionName: "Agregar productos",
			},
			{
				isGroup: false,
				icon: icon,
				sectionPath: 'sells',
				sectionName: "Historial de ventas",
			},
			{
				isGroup: false,
				icon: icon,
				sectionPath: "orders",
				sectionName: "Ordenes",
			},
		],
	},
]

const AsideBar = () => {

	const navigate = useNavigate();

	const handlelogOut = (event) => {
		event.preventDefault()
		localStorage.removeItem('token');
		navigate("/login")
	}

	return (
		<div
			className="flex flex-col gap-2 items-start
								min-h-[70vh] py-5 px-5
								shadow-container rounded-xl border border-neutral-700
								text-sm"
			id="aside-navbar"
		>
			{linksConfig.map(config => {
				if (!config.isGroup) {
					return <NavigationLink icon={config.icon} sectionPath={config.sectionPath} sectionName={config.sectionName} />
				} else {
					return <NavigationGroup icon={config.icon} sectionName={config.sectionName} links={config.links} />
				}
			})}

			<button
				className="mt-auto self-center py-2 px-5 border border-neutral-700 rounded-2xl hover:bg-red-400 hover:text-gray-100"
				onClick={(event) => handlelogOut(event)}
			>
				x Logout
			</button>
		</div>
	)
}

export default AsideBar
