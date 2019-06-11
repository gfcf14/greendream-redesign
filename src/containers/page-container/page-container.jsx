import React from 'react';
import { Flex } from 'rebass';
import { PageBody, PageTitle } from 'components';
import './page-container.scss';

export function PageContainer() {
  return (
    <Flex as="section" className="page-container-rct-component">
      <PageTitle title="SAMPLE" />
      <PageBody content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet bibendum felis. Duis in dui metus. Proin volutpat ac nibh vitae ornare. Suspendisse elementum, leo a ornare congue, lacus augue aliquet purus, id euismod turpis magna sit amet lectus. Vestibulum ac lectus pretium, hendrerit tellus quis, vulputate lectus. Sed egestas dolor a volutpat tristique. Phasellus et arcu sit amet ante ultricies maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a placerat arcu, sed sagittis massa. Mauris efficitur nisi lacus, vitae lobortis velit dictum eu. Morbi lacinia, sapien ut aliquam interdum, dolor odio congue ante, sit amet fringilla ante tortor quis dolor. Duis ut dolor tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed tristique magna. Etiam tincidunt libero arcu, et iaculis metus lobortis eu. Vestibulum consectetur nibh a augue sodales blandit. Etiam volutpat non odio in eleifend. In eget enim vel eros rhoncus facilisis. Sed facilisis metus sit amet tortor tempor hendrerit. Sed condimentum erat quis purus pellentesque molestie. Suspendisse maximus auctor ornare. Sed quis nulla velit. Donec erat arcu, suscipit vitae mi id, consequat auctor diam. Proin at dui varius, accumsan eros et, rutrum elit. In gravida malesuada mi, sit amet sagittis augue efficitur quis. Donec turpis sem, feugiat a varius sit amet, tincidunt sit amet lectus. Duis dignissim dolor a elit fringilla dapibus. Cras lectus ante, imperdiet ut arcu sit amet, ultricies gravida dolor. Curabitur eget neque in ligula facilisis venenatis. Nunc fringilla arcu et urna sollicitudin, non ultrices nibh consectetur. Integer et justo quis arcu finibus lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ut nisl dignissim, aliquam est et, efficitur mauris. Aenean mauris libero, scelerisque a lacinia sit amet, commodo sit amet odio. Nunc eget placerat risus. Fusce sit amet iaculis quam. Maecenas pretium at mi non eleifend. Fusce eget dui iaculis, sollicitudin mi quis, aliquet lorem. Donec ac mattis velit. Nunc tempor mollis ullamcorper. Ut pretium feugiat pharetra." />
    </Flex>
  );
}

