/*
 * Takes user to a YouTube video on their default browser
 * 
 * Nicole Dávila
 * 03-05-2024
 */

using UnityEngine;

public class OpenYouTubeVideo : MonoBehaviour
{
    [SerializeField] string youtubeVideoLink;

    public void OpenVideo()
    {
        if (!string.IsNullOrEmpty(youtubeVideoLink))
        {
            Application.OpenURL(youtubeVideoLink);
        }
        else
        {
            Debug.LogWarning("YouTube video link is not set.");
        }
    }
}

