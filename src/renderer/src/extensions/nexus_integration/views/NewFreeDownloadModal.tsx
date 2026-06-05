import type { TFunction } from "i18next";
import * as React from "react";
import { Button } from "react-bootstrap";

import FlexLayout from "../../../controls/FlexLayout";
import Image from "../../../controls/Image";

export interface INewFreeDownloadModal {
  t: TFunction;
  fileInfo: any;
  openModPage: () => void;
  onDownload: () => void;
  positionText: string;
}

function NewFreeDownloadModal(props: INewFreeDownloadModal) {
  const { t, fileInfo, openModPage, onDownload, positionText } = props;

  return (
    <div>
      <FlexLayout type="column" id="content-container">
        {/* First row - spans full width */}
        <FlexLayout.Fixed>
          {fileInfo !== null ? (
            <FlexLayout type="row" id="top-row">
              <FlexLayout.Fixed>
                <Image id="mod-thumbnail" srcs={[fileInfo.mod.pictureUrl]} />
              </FlexLayout.Fixed>

              <FlexLayout.Flex>
                <FlexLayout type="column">
                  <div id="mod-name">{fileInfo.mod.name}</div>
                  <div id="mod-author">by {fileInfo.mod.uploader.name}</div>
                </FlexLayout>
              </FlexLayout.Flex>

              <FlexLayout.Fixed>
                <div id="mod-count">{positionText}</div>
              </FlexLayout.Fixed>
            </FlexLayout>
          ) : (
            <FlexLayout type="row" id="top-row">
              <FlexLayout.Fixed>
                <div>Loading...</div>
              </FlexLayout.Fixed>
            </FlexLayout>
          )}
        </FlexLayout.Fixed>

        {/* Second row */}
        <FlexLayout.Fixed>
          <FlexLayout type="row" id="bottom-row">
            <FlexLayout.Flex>
              <FlexLayout type="column" id="free-container">
                <Button id="download-mod-button" onClick={onDownload}>
                  {t("Download manually")}
                </Button>
              </FlexLayout>
            </FlexLayout.Flex>
          </FlexLayout>
        </FlexLayout.Fixed>
      </FlexLayout>
    </div>
  );
}

export default NewFreeDownloadModal;
