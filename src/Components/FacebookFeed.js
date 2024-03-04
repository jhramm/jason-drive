import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
export default function FacebookFeed() {
  return (
    <div className="funfact-area overlay overlay-black overlay-70 pt-90 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <FacebookProvider appId="1138582067142999">
              <Page href="https://www.facebook.com/onlyessexdriving/" />
            </FacebookProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
