import StorageUtil from "../utils/StorageUtil";

export const getAuthorizationHeader = () => {
  return {
    headers: { Authorization: `Bearer ${StorageUtil.getAccessToken()}` },
  };
};
