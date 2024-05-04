/*
 * Plays a video on the background of the game
 * 
 * Nicole Dávila
 * 03-05-2024
 */

using UnityEngine;
using UnityEngine.Video;

public class VideoController : MonoBehaviour
{
    private VideoPlayer videoPlayer;

    void Start()
    {
        // Get the VideoPlayer component attached to this GameObject
        videoPlayer = GetComponent<VideoPlayer>();

        // Set video to loop
        videoPlayer.isLooping = true;

        // Play the video
        PlayVideo();
    }

    void PlayVideo()
    {
        if (videoPlayer != null)
        {
            // Start playing the video
            videoPlayer.Play();
        }
        else
        {
            Debug.LogError("VideoPlayer component not found.");
        }
    }

    void PauseVideo()
    {
        if (videoPlayer != null)
        {
            // Pause the video
            videoPlayer.Pause();
        }
        else
        {
            Debug.LogError("VideoPlayer component not found.");
        }
    }

    void StopVideo()
    {
        if (videoPlayer != null)
        {
            // Stop the video
            videoPlayer.Stop();
        }
        else
        {
            Debug.LogError("VideoPlayer component not found.");
        }
    }

    void OnDestroy()
    {
        // Stop and release the video resources when the GameObject is destroyed
        if (videoPlayer != null)
        {
            videoPlayer.Stop();
            videoPlayer.targetTexture.Release();
        }
    }
}
