/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.HashtagSetInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagSet.createMany(input as any))),

        create: procedure.input($Schema.HashtagSetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagSet.create(input as any))),

        deleteMany: procedure.input($Schema.HashtagSetInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagSet.deleteMany(input as any))),

        delete: procedure.input($Schema.HashtagSetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagSet.delete(input as any))),

        findFirst: procedure.input($Schema.HashtagSetInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).hashtagSet.findFirst(input as any))),

        findMany: procedure.input($Schema.HashtagSetInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).hashtagSet.findMany(input as any))),

        findUnique: procedure.input($Schema.HashtagSetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).hashtagSet.findUnique(input as any))),

        updateMany: procedure.input($Schema.HashtagSetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagSet.updateMany(input as any))),

        update: procedure.input($Schema.HashtagSetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).hashtagSet.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.HashtagSetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagSetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagSetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagSetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.HashtagSetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagSetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HashtagSetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HashtagSetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagSetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagSetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HashtagSetGetPayload<T>, Context>) => Promise<Prisma.HashtagSetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.HashtagSetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagSetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagSetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagSetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.HashtagSetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagSetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HashtagSetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HashtagSetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagSetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagSetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HashtagSetGetPayload<T>, Context>) => Promise<Prisma.HashtagSetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.HashtagSetFindFirstArgs, TData = Prisma.HashtagSetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HashtagSetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HashtagSetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HashtagSetFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HashtagSetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HashtagSetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HashtagSetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.HashtagSetFindManyArgs, TData = Array<Prisma.HashtagSetGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.HashtagSetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.HashtagSetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HashtagSetFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HashtagSetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.HashtagSetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.HashtagSetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.HashtagSetFindUniqueArgs, TData = Prisma.HashtagSetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HashtagSetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HashtagSetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HashtagSetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HashtagSetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HashtagSetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HashtagSetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.HashtagSetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagSetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagSetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagSetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.HashtagSetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HashtagSetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HashtagSetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HashtagSetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HashtagSetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HashtagSetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HashtagSetGetPayload<T>, Context>) => Promise<Prisma.HashtagSetGetPayload<T>>
            };

    };
}
