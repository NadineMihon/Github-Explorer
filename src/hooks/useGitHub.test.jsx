import { renderHook, act } from '@testing-library/react';
import { useGitHub } from "./useGitHub";
import { describe, expect, test } from "vitest";

describe('Checking the operation of useGitHub', () => {
    test('Successful user name acquisition', async () => {
        const { result } = renderHook(() => useGitHub());
    
        await act(async () => {
            await result.current.fetchUser('nul');
        });

        const testUsername = result.current.data.login;

        expect(testUsername).toBe('nul');
    });
    
    test('Successful retrieval of a programming language from a repository', async () => {
        const { result } = renderHook(() => useGitHub());
        
        await act(async () => {
            await result.current.fetchUserRepo('nul', 'NUglify');
        })

        const testRepoLanguage = result.current.data.language;

        expect(testRepoLanguage).toBe('C#');
    });
});