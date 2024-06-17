import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from '@/shared';
import { persistor, store } from './providers/store/store';
import router from './providers/router';

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback={<Spinner />}>
                    <RouterProvider router={router} />
                </Suspense>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
