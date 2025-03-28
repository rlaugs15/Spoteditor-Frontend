import { LogsQueryParams } from '@/services/apis/types/logAPI.type';
import { userLogsKeys } from '@/hooks/queries/userLog/userLogQueryKeys';
import api from '@/services/apis/api';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { UserBookmarkLogs } from '@/services/apis/types/userLogAPI';

export default function useOtherUserBookmarkLogs(
  userId: number,
  { page = 1, size = 12, direction = 'ASC' }: Partial<LogsQueryParams> = {},
  queryOptions?: Partial<UseQueryOptions<UserBookmarkLogs, Error>>
) {
  return useQuery({
    queryKey: userLogsKeys.otherUserBookmarkLogList(userId, { page, size, direction }),
    queryFn: () =>
      api.userLog.getOtherUserBookmarkLogs({ userId, params: { page, size, direction } }),
    ...queryOptions,
  });
}
