/*
 * Takes user to my GitHub repository
 * 
 * Nicole Dávila
 * 03-05-2024
 */

using UnityEngine;
using UnityEngine.UI;

public class OpenURL : MonoBehaviour
{
    public string url = "https://github.com/cyb3rn3t/A01784217_TC2005B";

    public void OpenExternalURL()
    {
        Application.OpenURL(url);
    }
}
