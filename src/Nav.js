import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = [
    {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Dashboard',
        to: '/dashboard',
        icon: 'nav-icon',
        badge: {
            color: 'info',
            text: 'NEW',
        },
    },
    {
        _component: 'CNavTitle',
        anchor: 'Set Up',
    },
    {
        _component: 'CNavGroup',
        as: NavLink,
        anchor: 'Set Up',
        to: '/to',
        icon: 'nav-icon',
        items: [
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Accordion',
            to: '/base/accordion',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Breadcrumb',
            to: '/base/breadcrumbs',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Cards',
            to: '/base/cards',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Carousel',
            to: '/base/carousels',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Collapse',
            to: '/base/collapses',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'List group',
            to: '/base/list-groups',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Navs & Tabs',
            to: '/base/navs',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Pagination',
            to: '/base/paginations',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Popovers',
            to: '/base/popovers',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Progress',
            to: '/base/progress',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Spinners',
            to: '/base/spinners',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Tables',
            to: '/base/tables',
          },
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Tooltips',
            to: '/base/tooltips',
          },
        ],
      },

]

export default nav