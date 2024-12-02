---
id: index
title: SoftHub
---

# SoftHub

Some info here

import {DocsCardList} from '../../src/components/DocsCard';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocsCardList list={useCurrentSidebarCategory().items} />