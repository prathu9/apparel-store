import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {updateCollections} from '../../redux/shop/shop.actions';

import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';



const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    
	state = {
		loading: true
	};

	unsubscribeFromSnapshot = null;

	componentDidMount(){
		const collectionRef = firestore.collection('collections');
		const {updateCollections} = this.props;
		
		collectionRef.get().then(snapshot => {
			const collectionMap = convertCollectionSnapshotToMap(snapshot);
			updateCollections(collectionMap);
			this.setState({loading: false});
		})
	}

	render(){
		const {match} = this.props;
		const {loading} = this.state;
		return(
        	<div className ="ShopPage">
           		<Route exact path={`${match.path}`} render={(props)=>(
				   <CollectionOverviewWithSpinner isLoading={loading} {...props}/>)}
				/>
           		<Route path={`${match.path}/:collectionId`} render={(props)=>(
				   <CollectionPageWithSpinner isLoading={loading} {...props}/>)}/> 
        	</div>
        )
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);