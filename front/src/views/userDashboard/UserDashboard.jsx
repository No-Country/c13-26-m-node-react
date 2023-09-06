import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs"
import AsideBar from "../../components/userDashboard/asideBar/AsideBar"

const UserDashboard = () => {
	return (
		<div
			className="min-h-screen p-10 m-auto max-w-full-container
								"
		>
			<BreadCrumbs />
			<div
				className="grid grid-cols-10
									p-5
									"
				id="container"
			>
				<div className=" h-full col-span-2" id="leftContainer">
					<AsideBar />
				</div>
				<div className=" h-full col-span-8" id="rightContainer">
					right container
				</div>
			</div>
		</div>
	)
}

export default UserDashboard
