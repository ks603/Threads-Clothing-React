import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../preview-collection/collection-preview.component'

import './collections-overview.styles.scss'
import { slelectCollectionsForPreview } from '../../redux/shop/shop.selector'

const CollectionsOverview = ({ collections }) => (
  <div className="colelctions-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: slelectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)

