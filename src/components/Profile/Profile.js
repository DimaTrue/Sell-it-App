import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';

import Header from '../CommonComponents/Header/Header';
import Footer from '../CommonComponents/Footer/Footer';
import Loading from '../CommonComponents/Loading/Loading';

import userPic from '../../img/defaultAvatar.jpg';

import style from './Profile.module.scss';


const Profile = () => {

	const { state: { user } } = React.useContext(Store);

	const userData = user.user;
	if (!userData) {
		return (
			<Fragment>
				<Header />
				<Loading />
				<Footer />
			</Fragment>
		)
	} else {
		return (
			<div>
				<Header />
				<div className={style.section}>
					<div className={style.container}>
						<div className={style.wrap}>
							<div className={style.polaroid}>
								<p><strong>{userData.username || 'unknown'}</strong></p>
								<img className={style.pic} src={userPic} alt="user" />
							</div>
							<div className={style.info}>
								<div className={style.box}>
									<i>Email: </i>
									<i>First name:  </i>
									<i>Last name: </i>
									<i>Location: </i>
									<i>Color scheme: </i>
									<i>Language: </i>
								</div>
								<div className={style.box}>
									<strong>{userData.email || 'unknown'}</strong>
									<strong>{userData.first_name || 'unknown'}</strong>
									<strong>{userData.last_name || 'unknown'}</strong>
									<strong>{userData.location || 'unknown'}</strong>
									<strong>{userData.color_scheme || 'unknown'}</strong>
									<strong>{userData.language || 'unknown'}</strong>
								</div>
							</div>
						</div>
						<div className={style.lowerLink}>
							<Link className={style.link} to='/' >Return to Product List</Link>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Profile;

