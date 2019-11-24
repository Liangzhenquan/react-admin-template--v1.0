import React from 'react';
import {StyleSheet,css,} from 'aphrodite';
const CustomBreadcrumb = () => {
  return (
    <div className={css(styles.breadcrumb)}>
          123
    </div>
  );
};
const styles = StyleSheet.create({
  breadcrumb: {
    width: '100%',
    height: '.8rem',
    lineHeight: '.8rem',
    backgroundColor: '#fff',
    boxShadow: '0 1px 2px 0  rgba(0, 0, 0, .1)',
  },
});
export default CustomBreadcrumb;